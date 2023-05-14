// var form = document.getElementById('form');
// var username = document.getElementById('uname');
// var email = document.getElementById('email');
// var password = document.getElementById('pass');
// var password2 = document.getElementById('pass2');

// // form.addEventListener('submit', e => {
// // 	e.preventDefault();

// // 	checkInputs();
// // });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	var usernameValue = username.value.trim();
// 	var emailValue = email.value.trim();
// 	var passwordValue = password.value.trim();
// 	var password2Value = password2.value.trim();

// 	if (usernameValue === '') {
// 		setErrorFor(username, 'Username cannot be empty');
// 	} else {
// 		setSuccessFor(username);
// 	}

// 	if (emailValue === '') {
// 		setErrorFor(email, 'Email cannot be empty');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}

// 	if (passwordValue === '') {
// 		setErrorFor(password, 'Password cannot be empty');
// 	} else if (passwordValue.length < 8) {
// 		setErrorFor(password, 'Password length must be more than 8');
// 	} else {
// 		setSuccessFor(password);
// 	}

// 	if (password2Value === '') {
// 		setErrorFor(password2, 'Password cannot be empty');
// 	} else if (passwordValue !== password2Value) {
// 		setErrorFor(password2, 'Passwords do not match');
// 	} else {
// 		setSuccessFor(password2);
// 	}

// 	//set in local storage

// 	localStorage.setItem('Username', JSON.stringify(usernameValue));
// 	localStorage.setItem('Email', JSON.stringify(emailValue));
// 	localStorage.setItem('Password', JSON.stringify(passwordValue));
// }

// function setErrorFor(input, message) {
// 	var formControl = input.parentElement;
// 	var small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	var formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }

// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }