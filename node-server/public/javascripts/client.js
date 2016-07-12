var addUser = (function () {
	'use strict';

	var init = function () {
		var form = utils.$('#formAddUser');
		
		form.addEventListener('submit', submitForm.bind(this));
	};

	var submitForm = function (e) {
		var form = e.target,
			data = "username="+form.username.value+"&useremail="+form.useremail.value,
			request = new XMLHttpRequest();
		
		request.open('POST', '/adduser', true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		
		request.send(data);

		//Devensive coding: e.preventDefault(); at the end of function execution
		e.preventDefault();
	};

	return {
		init: init
	};
}());


var utils = (function () {
	'use strict';

	var selectElement = function (element) {
		return document.querySelector(element);
	};

	var selectElements = function (elements) {
		return document.querySelectorAll(elements);
	};

	return {
		$: selectElement,
		$$: selectElements
	};
}());

addUser.init();


