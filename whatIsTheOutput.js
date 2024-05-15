function test1() {
  var secret = "OpenSesame!"
  setTimeout(function reveal() {
    console.log(secret)
  }, 3000)
  var secret = "Abracadabra!, This is consoled because, setTimeout will happen after 3 seconds by which time this statement is assigned to the variable"
}

// test1()
////result: Abracadabra!


function test2(){
  const arr = ["name"]
  const obj = {}
  obj.name = "Frontend Master"
  obj[arr] = "React"
  console.log(obj.name)
}

// test2()
////resut: React



function test3(){
  let lst1 = [20,40,23,44,66]
  lst1[3] = 66
  console.log(lst1)
}
//test3()
////resut: [20,40,23,66,66]


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