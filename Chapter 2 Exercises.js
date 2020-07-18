// Triangle Problem
for (let result = "x"; result < 7; result = result + "x"){
  console.log(result);
}

//FizzBuzz Program
for (let number = 1; number <=100; number ++) {
  if (number % 15 == 0) console.log ("FizzBuzz")
  else if (number % 3 == 0) console.log ("Fizz")
  else if (number % 5 == 0) console.log ("Buzz")
  else console.log(number)
}

//Checker Board Problem
for (let count = 1; count <= 5; count++) {
    if (count % 2 == 0) console.log(" # # # #");
    else console.log("# # # # ")
  }
  
    
    
  let size = 12;
  let board = "";
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      (row + col) % 2 == 0 ? board += " " : board += "#";
    }
    board += "\n"
  }
  console.log(board);

// extra project from NJN
  for (let count = 1; count <= 9; count++) {
    if (count == 1) console.log("x x x x x x x x x");
    if (count == 2) console.log("x               x");
    if (count == 3) console.log("x   x x x x x   x");
    if (count == 4) console.log("x   x       x   x");
    if (count == 5) console.log("x   x   x   x   x");
    if (count == 6) console.log("x   x       x   x");
    if (count == 7) console.log("x   x x x x x   x");
    if (count == 8) console.log("x               x");
    if (count == 9) console.log("x x x x x x x x x");
  }