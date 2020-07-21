//Minimum Function
function min(a, b) {
  if (a > b) 
    return b
  else return a
}

//Even Number *when using == this is a boulean operator and "return true/false" is implied and not needed
function isEven(N) {
  if (N % 2 == 0) return true;
  else return false
}

function isEven*(N) {
  return N % 2 == 0;
}

function isEven(N) {
  for (; ; N = N - 2) {
    if (N == 0) return true
    else if (N == 1) return false
    else if (N < 0) return isEven(-N)
  }
}

 function isEvener(N) {
  if (N == 0) return true
  else if (N == 1) return false
  else if (N < 0) return isEvener(-N)
  else return isEvener(N - 2)
}

// Count Character Functions
function countBs(string) {
  let count = 0;
  for (let N = 0 ; N < string.length; N++)
    if (string[N] == "B") {
      count += 1;
    }
      return count
 }
    
 function countChar(string, X) {
  let count = 0;
  for (let N = 0 ; N < string.length; N++)
    if (string[N] == X) {
      count += 1;
    }
      return count
 } 

 function countBs(string) {
   return countChar(string, "B")
 }