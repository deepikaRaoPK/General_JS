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


function test4(){
  let lst1 = [20,40,23,44,66]
  let lst2 = [...lst1]
  lst2.push(777)
  console.log(lst1)
  console.log(lst2)
}
// test4()
////resut: [20,40,23,44,66]
////       [20,40,23,44,66, 777]

