var inputs = document.querySelectorAll('footer input[type=radio]')

for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i]
  var label = document.querySelector('label[for=' + input.id + ']')
  label.title = label.innerHTML
  label.dataset.index = i

  var div = document.createElement('div')
  div.classList.add('rating-option')
  div.appendChild(input)
  div.appendChild(label)
  document.querySelector('footer form fieldset').appendChild(div)

  label.addEventListener('mouseover', function () {
    for (var j = 0; j < inputs.length; j++) {
      var tempLabel = document.querySelector('footer label[for=' + inputs[j].id + ']')
      if (tempLabel.dataset.index <= this.dataset.index) {
        tempLabel.classList.add('hover')
      } else {
        tempLabel.classList.remove('hover')
      }
    }
  })

  label.addEventListener('mouseout', function () {
    for (var j = 0; j < inputs.length; j++) {
      document.querySelector('footer label[for=' + inputs[j].id + ']').classList.remove('hover')
    }
  })

  label.addEventListener('click', function () {
    for (var j = 0; j < inputs.length; j++) {
      var tempLabel = document.querySelector('footer label[for=' + inputs[j].id + ']')
      if (tempLabel.dataset.index <= this.dataset.index) {
        tempLabel.classList.add('checked')
      } else {
        tempLabel.classList.remove('checked')
      }
    }
    sendData()
  })
}

function sendData () {
  var request = new XMLHttpRequest()

  request.addEventListener('load', function (event) {
    console.log('Succes! ' + event.target.responseText)
  })
  request.addEventListener('error', function (event) {
    console.error('Form could not be sent! ' + event.target.responseText)
  })

  request.open('POST', 'https://super.awesome.api.com')
  request.send(new FormData(document.querySelector('footer form')))
}

document.querySelector('footer input[type=submit]').classList.add('rating-submit')
document.querySelector('footer form').addEventListener('submit', function (event) {
  event.preventDefault()
})
