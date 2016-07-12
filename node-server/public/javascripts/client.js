
var addUser = (function(){

	var init = function () {
		var form = utils.$('#formAddUser');
		
		form.addEventListener('submit', submitForm.bind(this));
	}

	var submitForm = function (e) {
		
		var form = e.target,
			formData = new FormData(form),
			request = new XMLHttpRequest();

		
		request.open('POST', '/adduser', true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		

		request.send(formData);

		e.preventDefault();
	}

	return {
		init: init
	}
}());


var utils = (function(){

	var selectElement = function (element) {
		return document.querySelector(element);
	}

	var selectElements = function (elements) {
		return document.querySelectorAll(elements);
	}

	return {
		$: selectElement,
		$$: selectElements
	}
}());

addUser.init();