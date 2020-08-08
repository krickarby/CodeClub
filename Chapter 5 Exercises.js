//flatten
let arrays = [[1, 2, 3], [4, 5], [6]];
const reducer = function(acc, element) {
  acc.concat(element)
}

//flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
const reducer = (acc, element) => acc.concat(element)

console.log(arrays.reduce(reducer, []));

//Loop Function
const loop = function(value, testFunction, updateFunction, bodyFunction) {
    for (let count = value; ; ) {
      if (testFunction(count) === false) {
      return false 
     }
      bodyFunction(count)  	
      let temp = updateFunction(count)
      count = temp
    }
  }

//simplified Loop
const loop = function(value, testFunction, updateFunction, bodyFunction) {
    for (; testFunction(value); value = updateFunction(value)) {
      bodyFunction(value)  	
    }
  }

//Everything
  function every(array, test) {
    for (let element of array) {
      if (!test(element)) {
        return false;
      }
    }
    return true;
  }

  //other
  const firstLetter = function(array) {
    let array2 = []
    for (let element of array) {
      array2.push(element.charAt(0))
    }
    return array2
  }

  //Dominant Writing
  function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0))
        return script ? script.direction : "none";
    })
    scripts = scripts.filter(obj => {
      return obj.name !== "none";
    });
    console.log(2, scripts)
    let lastObject = scripts.reduce((acc, current) => {
      if (acc.count > current.count) {
        return acc
      } else return current
    })
    return lastObject.name
  }