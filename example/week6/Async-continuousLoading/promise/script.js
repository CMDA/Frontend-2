function throwDice () {
  return Math.floor(Math.random() * 6) + 1
}

var promise = new Promise(function (resolve, reject) {
  var numberThrown = throwDice()
  if (numberThrown === 6) {
    resolve(numberThrown)
  } else {
    reject(numberThrown)
  }
})

promise.then(function (toss) {
  console.log('Hé kijk nou, ik gooide een ' + toss + '.')
}).catch(function (toss) {
  console.log('Podverdorie, ik gooide een ' + toss + '.')
})
