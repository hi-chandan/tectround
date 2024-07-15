import React from "react";
import "./App.css";
const App = () => {
  return (
    <section className="bg-[#598b8a] h-screen flex justify-center items-center  ">
      <div className="flex rounded-md ">
        <div className="">
          <img src="image.png" className=" second rounded-md  " alt="" />
        </div>
        <div className=" bg-yellow-500 w-[500px] flex flex-col  justify-center items-center">
          <form action=" " className="bg-white  rounded-md ">
            <h1 className="m-2 font-bold text-yellow-500 shadow-md p-2">
              ALREADY MEMBER
            </h1>
            <div className="flex flex-col gap-4 p-8  justify-center items-center">
              <input type="text" placeholder="Enter you name" className="p-2" />
              <input type="text" placeholder="Enter you" className="p-2 " />
              <button className="bg-green-600 rounded-md w-full p-2">
                SIGN IN
              </button>
            </div>
          </form>
          <h1 className="text-white text-sm mt-2">
            Don't have an account yet?
          </h1>
          <h1 className="text-sm">Create an account</h1>
        </div>
      </div>
    </section>
  );
};

export default App;
