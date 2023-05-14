// var form = document.getElementById('form');
// var email = document.getElementById('email');
// var password = document.getElementById('pass');

// form.addEventListener('submit', e => {
// 	e.preventDefault();

// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces

// 	var emailValue = email.value.trim();
// 	var passwordValue = password.value.trim();

// 	//get from localstorage

// 	var myEmail = JSON.parse(localStorage.getItem("Email"));
// 	var myPassword = JSON.parse(localStorage.getItem("Password"));

// 	if (emailValue === '') {
// 		setErrorFor(email, 'Email cannot be empty');
// 	} else if (emailValue !== myEmail) {
// 		setErrorFor(email, 'Email does not match');
// 	} else {
// 		setSuccessFor(email);
// 	}

// 	if (passwordValue === '') {
// 		setErrorFor(password, 'Password cannot be empty');
// 	} else if (passwordValue !== myPassword) {
// 		setErrorFor(password, 'Password does not match');
// 	} else {
// 		setSuccessFor(password);
// 	}

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



// // loginButton.addEventListener('click', () => {


// //   onLogin('John Doe');
// // });

// function login() {
  
// 	var userName = JSON.parse(localStorage.getItem("Username"));

// 	window.open("../fashe-ecommerce-website-template/fashe-colorlib/index.html" , "_self");
//   // add event listener to login button

//   //var loginButton = document.getElementById('login-button');
//   //loginButton.addEventListener('click', () => {
// 	//alert('ssss')
	

// 	//login('Welcome' + userName);
  
// 	// redirect user to home page
	
// // });
// }