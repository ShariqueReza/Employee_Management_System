var nameInp = document.getElementById('name');
var emailInp = document.getElementById('email');
var subjectInp = document.getElementById('subject');
var messageInp = document.getElementById('message');

var addBtn = document.getElementById("addBtn");

var alertName = document.getElementById("alertName");
var alertEmail = document.getElementById("alertEmail");
var alertSubject = document.getElementById("alertSubject");
var alertMessage = document.getElementById("alertMessage");

var inputs = document.querySelectorAll(".form-control");
var currentIndex;

var employees = [];

if (JSON.parse(localStorage.getItem('contactsList')) != null) {
    employees = JSON.parse(localStorage.getItem('contactsList'));
    displayEmployee();
}

addBtn.addEventListener('click', function() {
    var isValid = true;

    if (!validName()) {
        isValid = false;
    }
    if (!validEmail()) {
        isValid = false;
    }
    if (!validSubject()) {
        isValid = false;
    }
    if (!validMessage()) {
        isValid = false;
    }
    if (isEmployeeExist()) {
        alert('This Employee already exists');
        isValid = false;
    }

    if (isValid) {
        addEmployee();
        displayEmployee();
        resetForm();
    }
});

function addEmployee() {
    var employee = {
        name: nameInp.value,
        email: emailInp.value,
        subject: subjectInp.value,
        message: messageInp.value,
    }
    employees.push(employee);
    localStorage.setItem('contactsList', JSON.stringify(employees));
}

function displayEmployee() {
    var row = '';
    for (var i = 0; i < employees.length; i++) {
        row += '<tr>' + 
            '<td>' + (i + 1) + '</td>' +
            '<td>' + employees[i].name + '</td>' + 
            '<td>' + employees[i].email + '</td>' +
            '<td>' + employees[i].subject + '</td>' + 
            '<td>' + employees[i].message + '</td>' +
            '<td><button class="btn btn-danger" onclick="deleteEmployee(' + i + ')">Delete</button></td>' + 
            '</tr>';
    }
    document.getElementById('contactTable').innerHTML = row;
}

function resetForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
    }
    alertName.classList.add('d-none');
    alertEmail.classList.add('d-none');
    alertSubject.classList.add('d-none');
    alertMessage.classList.add('d-none');
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployee();
    localStorage.setItem('contactsList', JSON.stringify(employees));
}

function validName() {
    var regexName = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    if (regexName.test(nameInp.value)) {
        nameInp.classList.add('is-valid');
        nameInp.classList.remove('is-invalid');
        alertName.classList.add('d-none');
        return true;
    }
    else
    {
        nameInp.classList.add('is-invalid');
        nameInp.classList.remove('is-valid');
        alertName.classList.remove('d-none');
        return false;
    }
}

function validEmail() {
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(emailInp.value)) {
        emailInp.classList.add('is-valid');
        emailInp.classList.remove('is-invalid');
        alertEmail.classList.add('d-none');
        return true;
    }
    else
    {
        emailInp.classList.add('is-invalid');
        emailInp.classList.remove('is-valid');
        alertEmail.classList.remove('d-none');
        return false;
    }
}

function validSubject() {
    var regexSubject =  /^.{1,100}$/;
    if (regexSubject.test(subjectInp.value)) {
        subjectInp.classList.add('is-valid');
        subjectInp.classList.remove('is-invalid');
        alertSubject.classList.add('d-none');
        return true;
    }
    else
    {
        subjectInp.classList.add('is-invalid');
        subjectInp.classList.remove('is-valid');
        alertSubject.classList.remove('d-none');
        return false;
    }
}

function validMessage() {
    var regexMessage = /^.{1,500}$/;
    if (regexMessage.test(messageInp.value)) {
        messageInp.classList.add('is-valid');
        messageInp.classList.remove('is-invalid');
        alertMessage.classList.add('d-none');
        return true;
    }
    else
    {
        messageInp.classList.add('is-invalid');
        messageInp.classList.remove('is-valid');
        alertMessage.classList.remove('d-none');
        return false;
    }
}

function isEmployeeExist() {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].name.toLowerCase() === nameInp.value.toLowerCase()) {
            return true;
        }
    }
    return false;
}

nameInp.addEventListener('input', validName);
emailInp.addEventListener('input', validEmail);
subjectInp.addEventListener('input', validSubject);
messageInp.addEventListener('input', validMessage);