///// to convert array of objects to a single object with a value of a given key as the key of the combined object
function convertArrOfObjToObj(arr, key2Bkey){
  const createdObj = {}
  let newObj = arr.reduce((createdObjPassed, objInArr)=>{
    return {
      ...createdObjPassed,
      [objInArr[key2Bkey]] : objInArr
    }
  },createdObj)

  console.log(newObj)

}


convertArrOfObjToObj([
  { id: 111, name: "John", age: 29 },
  { id: 112, name: "Sarah", age: 25 },
  { id: 122, name: "Kate", age: 22 },
  { id: 123, name: "Tom", age: 21 },
  { id: 125, name: "Emma", age: 24 },
],
"id"
)