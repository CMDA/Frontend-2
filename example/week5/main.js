$$('footer input[type=radio]').forEach(function (input, i) {
  input.parentElement.insertAdjacentElement('beforeend', embedInDiv(input, enhanceLabel(getLabelFor(input), i)))
})

addClass(document.querySelector('footer input[type=submit]'), 'rating-submit')

document.querySelector('footer form').addEventListener('submit', function (event) {
  event.preventDefault()
})

/**
 * $ is a jQuery style shorthand for selecting elements using a CSS selector
 * @param  {String} selector  CSS selector for the element you want to select
 * @return {Element}          The first element that satisfies the selector
 */
function $ (selector) {
  return document.querySelector(selector)
}

/**
 * $$ is a jQuery style shorthand for selecting multiple elements using a CSS selector
 * @param  {String} selector CSS selector for the element you want to select
 * @return {NodeList}        A NodeList of elements satisfying the selector
 */
function $$ (selector) {
  return document.querySelectorAll(selector)
}

/**
 * embedInDiv creates a new <div> element and embeds any passed stuff
 * @param  {Elements} ... Any number of Elements that are to be embedded
 * @return {Element}      A <div> containing the passed Elements
 */
function embedInDiv () {
  return Array.from(arguments).reduce(function (acc, arg) {
    acc.insertAdjacentElement('beforeend', arg)
    return acc
  }, addClass(document.createElement('div'), 'rating-option'))
}

/**
 * addClass adds class to an Element
 * @param {Element} el Element to add a class to
 * @param {String} cl  class to add to the Element
 */
function addClass (el, cl) {
  el.classList.add(cl)
  return el
}

/**
 * enhanceLabel modifies a passed <label> element according to our needs
 * @param  {Element} label the label element we want to modify
 * @param  {Number} index  an index of this label element which will be put in the dataset attribute
 * @return {Element}       the modified label
 */
function enhanceLabel (label, index) {
  label.title = label.innerHTML
  label.dataset.index = index
  return label
}

/**
 * getLabelFor selects a label for the passed <input> element
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */
function getLabelFor (input) {
  return $('label[for=' + input.id + ']')
}

/*

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
*/
