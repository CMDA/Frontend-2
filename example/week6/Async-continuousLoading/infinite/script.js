const ul = document.querySelector('ul')
const loadTrigger = 100 // the amount of offset px before data fetch starts

let currentPage = 0
let isLoading = false

function addListItems (dataArray) {
  dataArray.forEach(dataObject => {
    ul.innerHTML += `
    <li>
      <h2>${dataObject.title}</h2>
      <p>${dataObject.body}</p>
    </li>`
  })
}

function getData (page) {
  if (!isLoading) {
    isLoading = true
    fetch(`http://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=5`)
      .then(res => res.json())
      .then(res => {
        isLoading = false
        currentPage++
        addListItems(res)
      })
  }
}

getData(currentPage)

ul.addEventListener('scroll', function () {
  if (ul.scrollHeight <= ul.scrollTop + ul.clientHeight + loadTrigger) {
    getData(currentPage)
  }
})
