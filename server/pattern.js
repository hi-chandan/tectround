function generateAndReversePattern(n) {
  let pattern = [];

  // Generate the pattern
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === n) {
        line += "*";
      } else {
        line += " ";
      }
    }
    pattern.push(line);
  }

  // Reverse and print the pattern
  for (let i = pattern.length - 1; i >= 0; i--) {
    console.log(pattern[i]);
  }
}

// Example usage with n = 6
generateAndReversePattern(6);
