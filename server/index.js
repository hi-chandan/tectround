import express from "express";
import { Router } from "express";
import { Connect } from "./config/database.js";
import { faker } from "@faker-js/faker";
import { Student } from "./model/studentmodel.js";
import { WorksnapsTimeEntry } from "./model/worktimemodel.js";
const router = express.Router();
const app = express();
app.use(express.json());

router.get("/createdata", async (req, res) => {
  try {
    await Student.deleteMany({});
    await WorksnapsTimeEntry.deleteMany({});

    // Generate and insert fake students
    const students = [];
    for (let i = 0; i < 10; i++) {
      const student = new Student({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        displayName: faker.person.fullName(),
        municipality: faker.address.city(),
      });
      await student.save();
      students.push(student);
    }

    for (const student of students) {
      const timeEntries = [];
      for (let j = 0; j < 5; j++) {
        timeEntries.push({
          date: faker.date.recent(),
          startTime: faker.date.recent(),
          endTime: faker.date.recent(),
          description: faker.lorem.sentence(),
          duration: faker.datatype.number({ min: 1, max: 8 }),
        });
      }

      const workSnap = new WorksnapsTimeEntry({
        student: student._id,
        timeEntries: timeEntries,
      });

      await workSnap.save();
    }

    console.log("Fake data generated and inserted successfully.");
    res.status(200).json({
      message: "success data is created",
    });
  } catch (error) {
    console.log("fake data not created", error);
  }
});

router.get("/studententire", async (req, res) => {
  try {
    const students = await Student.find();
    if (students.length === 0) {
      console.log("No students found in the database.");
      return;
    }
    console.log(
      `Student: ${
        students.displayName || students.firstName + " " + students.lastName
      }`,
    );
    // create a array studen time to store teh time of student
    const studentTimeEntries = [];
    for (const student of students) {
      // Find time entries for each student
      const timeEntries = await WorksnapsTimeEntry.find({
        student: student._id,
      });

      // option to console the student info

      // console.log(
      //   `Student: ${
      //     student.displayName || student.firstName + " " + student.lastName
      //   }`,
      // );
      if (timeEntries.length === 0) {
        console.log("No time entries found for this student.");
      } else {
        console.log("Time Entries:");
        studentTimeEntries.push({
          student: {
            displayName:
              student.displayName || `${student.firstName} ${student.lastName}`,
            municipality: student.municipality,
          },
          timeEntries: timeEntries,
        });
        timeEntries.forEach((entry) => {
          console.log(entry.timeEntries);
        });
      }
    }
    res.status(200).json({
      message: "Success",
      data: studentTimeEntries,
    });
  } catch (error) {
    console.log("error time", error);
  }
});

router.post("/prime", (req, res) => {
  const { number } = req.body;
  if (number < 2) {
    return res.status(200).json({
      message: "Not Prime Number",
    });
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return res.status(200).json({
        message: "Not Prime Number",
      });
    }
  }
  return res.status(200).json({
    message: "Prime number",
  });
});

app.use("/api", router);
Connect;

app.listen(3000, (res, req) => {
  console.log("server is working");
});
