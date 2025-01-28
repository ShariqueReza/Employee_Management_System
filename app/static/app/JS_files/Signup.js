var nameInp = document.getElementById("Name");
var emailInp = document.getElementById("Email");
var passwordInp = document.getElementById("Password");
var confirmPasswordInp = document.getElementById("confirmPassword");

var addBtn = document.getElementById("signupBtn");

var alertName = document.getElementById("alertName");
var alertEmail = document.getElementById("alertEmail");
var alertPassword = document.getElementById("alertPassword");
var alertConfirmPassword = document.getElementById("alertConfirmPassword");

var inputs = document.querySelectorAll(".form-control");
var currentIndex;

var employees = [];

if (JSON.parse(localStorage.getItem("usersList")) != null) {
  employees = JSON.parse(localStorage.getItem("usersList"));
  displayEmployee();
}

addBtn.addEventListener("click", function () {
  var isValid = true;
  window.location.href = "index.html";
  if (!validName()) {
    isValid = false;
  }
  if (!validEmail()) {
    isValid = false;
  }
  if (!validPassword()) {
    isValid = false;
  }
  if (!validConfirmPassword()) {
    isValid = false;
  }
  if (isEmployeeExist()) {
    alert("This email address is already in use. If you already have an account, please log in.");
    isValid = false;
  }

  if (isValid) {
    addEmployee();
    alert(
      "Your account has been created successfully. Please log in to continue."
    );
  }
});

function addEmployee() {
  var employee = {
    name: nameInp.value,
    email: emailInp.value,
    password: passwordInp.value,
    confirmPassword: confirmPasswordInp.value,
  };
  employees.push(employee);
  localStorage.setItem("usersList", JSON.stringify(employees));
}

function displayEmployee() {
  var row = "";
  for (var i = 0; i < employees.length; i++) {
    row +=
      "<tr>" +
      "<td>" +
      (i + 1) +
      "</td>" +
      "<td>" +
      employees[i].name +
      "</td>" +
      "<td>" +
      employees[i].email +
      "</td>" +
      "<td>" +
      employees[i].password +
      "</td>" +
      "<td>" +
      employees[i].confirmPassword +
      "</td>" +
      '<td><button class="btn btn-danger" onclick = "deleteEmployee(' +
      i +
      ')">Delete</button></td>' +
      "</tr>";
  }
  document.getElementById("signupTable").innerHTML = row;
}

function deleteEmployee(index) {
  employees.splice(index, 1);
  localStorage.setItem("usersList", JSON.stringify(employees));
  displayEmployee();
}

function getEmployeeInfo(index) {
  currentIndex = index;
  var currentEmployee = employees[index];
  nameInp.value = currentEmployee.name;
  emailInp.value = currentEmployee.email;
  passwordInp.value = currentEmployee.password;
  confirmPasswordInp.value = currentEmployee.confirmPassword;
  addBtn.style.display = "none";
}

function validName() {
  var regexName = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
  if (regexName.test(nameInp.value)) {
    nameInp.classList.add("is-valid");
    nameInp.classList.remove("is-invalid");
    alertName.classList.add("d-none");
    return true;
  } else {
    nameInp.classList.add("is-invalid");
    nameInp.classList.remove("is-valid");
    alertName.classList.remove("d-none");
    return false;
  }
}

function validEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInp.value.match(mailformat)) {
    emailInp.classList.add("is-valid");
    emailInp.classList.remove("is-invalid");
    alertEmail.classList.add("d-none");
    return true;
  } else {
    emailInp.classList.add("is-invalid");
    emailInp.classList.remove("is-valid");
    alertEmail.classList.remove("d-none");
    return false;
  }
}

function validPassword() {
  if (passwordInp.value !== "") {
    passwordInp.classList.add("is-valid");
    passwordInp.classList.remove("is-invalid");
    alertPassword.classList.add("d-none");
    return true;
  } else {
    passwordInp.classList.add("is-invalid");
    passwordInp.classList.remove("is-valid");
    alertPassword.classList.remove("d-none");
    return false;
  }
}

function validConfirmPassword() {
  if (confirmPasswordInp.value === passwordInp.value) {
    confirmPasswordInp.classList.add("is-valid");
    confirmPasswordInp.classList.remove("is-invalid");
    alertConfirmPassword.classList.add("d-none");
    return true;
  } else {
    confirmPasswordInp.classList.add("is-invalid");
    confirmPasswordInp.classList.remove("is-valid");
    alertConfirmPassword.classList.remove("d-none");
    return false;
  }
}

function isEmployeeExist() {
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].email === emailInp.value) {
      return true;
    }
  }
  return false;
}

nameInp.addEventListener("input", validName);
emailInp.addEventListener("input", validEmail);
passwordInp.addEventListener("input", validPassword);
confirmPasswordInp.addEventListener("input", validConfirmPassword);
