
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

const showLogin = document.getElementById('show-login');
const showRegister = document.getElementById('show-register');

// login to register
showRegister.addEventListener("click", function(event){
    event.preventDefault();

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
});

showLogin.addEventListener("click", function(event){
    event.preventDefault();

    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});















// ---- Register / Login logic (localStorage, sirf demo ke liye) ----
// const USERS_KEY = "travelmart_users";
// const CURRENT_USER_KEY = "travelmart_current_user";

// function getUsers() {
//     try {
//         return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
//     } catch (error) {
//         return [];
//     }
// }

// function showFormMessage(form, text, type) {
//     let message = form.querySelector(".form-message");

//     if (!message) {
//         message = document.createElement("p");
//         message.className = "form-message";
//         form.querySelector(".submit-btn").before(message);
//     }

//     message.textContent = text;
//     message.className = "form-message " + type;
// }

// registerForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("register-name").value.trim();
//     const email = document.getElementById("register-email").value.trim().toLowerCase();
//     const password = document.getElementById("register-password").value;

//     const users = getUsers();
//     const exists = users.some(function (user) {
//         return user.email === email;
//     });

//     if (exists) {
//         showFormMessage(registerForm, "This email is already registered. Please login.", "error");
//         return;
//     }

//     users.push({ name: name, email: email, password: password });
//     localStorage.setItem(USERS_KEY, JSON.stringify(users));

//     registerForm.reset();
//     registerForm.classList.add("hidden");
//     loginForm.classList.remove("hidden");
//     showFormMessage(loginForm, "Account created. Please login.", "success");
// });

// loginForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const email = document.getElementById("login-email").value.trim().toLowerCase();
//     const password = document.getElementById("login-password").value;

//     const user = getUsers().find(function (item) {
//         return item.email === email && item.password === password;
//     });

//     if (!user) {
//         showFormMessage(loginForm, "Invalid email or password.", "error");
//         return;
//     }

//     localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: user.name, email: user.email }));
//     window.location.href = "index.html";
// });