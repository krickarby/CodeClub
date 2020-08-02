// Range Function
function range(x, y) {
    let array = [];
    let step = 1;
    if (step > 0) {
      for (let i = x; i <= y; i += step) array.push(i);
    } 
    return array;
  }

  function range(x, y, step = 1) {
    let array = [];
    if (step > 0) {
      for (let i = x; i <= y; i += step) array.push(i);
    } else {
        for (let i = x; i >=y; i += step) array.push(i);
    }
    return array;
  }
//Sum
function sum(array) {
	let total = 0
    for (let value of array) {
      total += value;
    }
  return total
}

//arrayToList and listToArray wiht prepend and nth
function arrayToList(arr) {
    let list = null
    for (let i = arr.length - 1; i >= 0; i--) {
      let node = {value: arr[i], rest: list}
      list = node;
    }
    return list
  }
  
  function listToArray(list) {
    let arr = []
    while (list != null) {
      arr.push(list.value)
      list = list.rest
    }
    return arr;
  }
  
  function prepend(element, list) {
    return {value: element, rest: list}
    }
  
  function nth(list, num) {
    if (num === 0) {
      return list.value
    } else if (list.rest != null) {
      return list.rest.value
    } else {return list.rest.rest.value}
  }

  function nth(list, num) {
    if (num === 0) {
      return list.value
    } else if (num === 1) {
      return list.rest.value
    } else if (num === 2) {
      return list.rest.rest.value
    }
  }  

  function nth(list, num) {
    if (num === 0)
      return list.value
    for (num; num > 0; num--) {
      if (list === null) {
        return undefined
      }
      list = list.rest
    }
    return list.value
  }

  //recursive nth version
  function nth(list, num) {
    if (num === 0)
      return list.value
    if (list === null) {
      return undefined
    }
    return nth(list.rest, num-1)
  }

  //deepEqual
  function deepEqual(value1, value2) {
    if (typeof value1 === "object" && typeof value2 === "object" && value1 != null && value2 != null) {
        if (Object.keys(value1).length != Object.keys(value2).length) {
        console.log("keys are not same length")
        return false
      }
      for (let i = 0; i < Object.keys(value1).length; i++) {
        let key = Object.keys(value1)[i]
        if (!key in Object.keys(value2)) {
          console.log("key is not equal", key)
          return false
        }
        if (!deepEqual(value1[key], value2[key])) {
           console.log("value is not equal", key)
          return false
        }
      } return true 
    } else {
      return value1 === value2
      }
  }
  
