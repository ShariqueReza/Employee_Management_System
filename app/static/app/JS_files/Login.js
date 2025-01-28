var email = document.getElementById("loginEmail");
var password = document.getElementById("loginPassword");
var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  var allusers = JSON.parse(localStorage.getItem("usersList"));
  var isValidUser = false;

  for (var i = 0; i < allusers.length; i++) {
    if (
      email.value === allusers[i].email &&
      password.value === allusers[i].password
    ) {
      isValidUser = true;
      break;
    }
  }

  if (isValidUser) {
    window.location.href = "home.html";
  } else {
    alert("Invalid Credentials");
  }
});

function validEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    alertEmail.classList.add("d-none");
    return true;
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    alertEmail.classList.remove("d-none");
    return false;
  }
}

function validPassword() {
  if (password.value !== "") {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
    alertPassword.classList.add("d-none");
    return true;
  } else {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    alertPassword.classList.remove("d-none");
    return false;
  }
}

email.addEventListener("input", validEmail);
password.addEventListener("input", validPassword);
