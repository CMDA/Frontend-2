/**
 * [remove: removes an object from the DOM tree]
 */
Element.prototype.remove = function () {
  this.parentNode.removeChild(this)
}
/**
 * [remove: removes a series of objects from the DOM tree]
 */
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentNode) {
      this[i].parentNode.removeChild(this[i])
    }
  }
}

document.querySelectorAll('h1').remove()

// This can't be done quicker.. write a function DRY
let instruction = document.createTextNode('Toss the images around; if you see one you like, click on it!')
let header = document.createElement('h2')
header.appendChild(instruction)
let listItem = document.createElement('li')
listItem.appendChild(header)
document.querySelector('main section ul').appendChild(listItem)


// Hook the drag functions on the li elements
document.querySelectorAll('main section li').forEach(function (image) {
  image.addEventListener('dragstart', function (event) {
    console.log('start dragging..') // Closure!
  })

  image.addEventListener('dragend', function (event) {
    console.log('stop dragging..') // Closure!
  })
})

// TODO: functionality to move the dragged item to the new location when dragged

// Stop the default action when clicking a link
document.querySelectorAll('main section li a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault()
  })
})

// Randomly place all images
document.querySelectorAll('main section li').forEach(function (image) {
  let left = (window.innerWidth / 2 - image.offsetWidth / 2)
  let top = (window.innerHeight / 2 - image.offsetHeight / 2)

  image.style.position = 'absolute'
  image.style.left = left + (-200 + Math.random() * 400) + 'px'
  image.style.top = top + (-200 + Math.random() * 400) + 'px'
})
