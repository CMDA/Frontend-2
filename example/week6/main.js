var email = /^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/

document.querySelector('form #tekstveld').addEventListener('input', (e) => {
  //
  if (e.target.value.match(email) !== null) {
    document.querySelector('#' + e.target.id).classList.add('correct')
  } else {
    document.querySelector('#' + e.target.id).classList.remove('correct')
  }
  // */
})
