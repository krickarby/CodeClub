//Minimum Function
function min(a, b) {
  if (a > b) 
    return b
  else return a
}

//Even Number
function isEven(N) {
  if (N % 2 == 0) return true;
  else return false
}

function isEven(N) {
  for (; ; N = N - 2) {
    if (N == 0) return true
    else if (N == 1) return false
    else if (N < 0) return isEven(-N)
  }


 function isEvener(N) {
  if (N == 0) return true
  else if (N == 1) return false
  else if (N < 0) return isEvener(-N)
  else return isEvener(N - 2)
}

