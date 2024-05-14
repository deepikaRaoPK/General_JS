function mysteryFunction() {
  var secret = "OpenSesame!"
  setTimeout(function reveal() {
    console.log(secret)
  }, 3000)
  var secret = "Abracadabra!"
}

// mysteryFunction()
////result: Abracadabra!




