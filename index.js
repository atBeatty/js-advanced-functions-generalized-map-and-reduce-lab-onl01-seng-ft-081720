// Add your functions here

// function map(array, mapperFunction){
//     return array.map(function(el){
//         return mapperFunction(el)
//     })
// }



// function reduce(array, reducerFunction, startingPoint=0){
//     array = [array[startingPoint], ...array.slice(startingPoint + 1)]
//     console.log(array)


//     let allNumbersChecker = array.every(el => typeof el === "number")
//     console.log(allNumbersChecker)
   
//     let reduceResult = array.reduce(function(a, el){
//         return reducerFunction(a, el)
//     })
   
//     if (allNumbersChecker){
//         return reduceResult
//     } else if {
//         return false

//     }






// }


const map = (arr, func) => arr.map(e => func(e))

const reduce = (sourceArray, func, startingPoint) => {
    let r = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1
    for (; i < sourceArray.length; i++) {
      r = func(sourceArray[i], r)
    }
    return r;
  }