var empIdInp = document.getElementById('Eid');
var empNameInp = document.getElementById('Ename');
var empDateInp = document.getElementById('Edate');
var empTimeInInp = document.getElementById('EtimeIn');
var empTimeOutInp = document.getElementById('EtimeOut');

var addBtn = document.getElementById('addBtn');
var resetBtn = document.getElementById('resetBtn');
var updateBtn = document.getElementById('updateBtn');

var inputs = document.querySelectorAll('.form-control');
var currentIndex;

var alertEmpid = document.getElementById('alertEmpid');
var alertName = document.getElementById('alertName');
var alertDate = document.getElementById('alertDate');
var alertTimeIn = document.getElementById('alertTimeIn');
var alertTimeOut = document.getElementById('alertTimeOut');

var alerts = document.getElementsByClassName('alert');

// Iterate over each alert element and apply the style
for (var i = 0; i < alerts.length; i++) {
    alerts[i].style.textAlign = "center";
}

var allemployeesid = JSON.parse(localStorage.getItem('employeesList'));
for (i= 0; i < allemployeesid.length; i++) {
    var option = document.createElement('option');
    option.value = allemployeesid[i].empid;
    option.text = allemployeesid[i].empid;
    var selectemployeeid = document.getElementById('Eid');
    selectemployeeid.appendChild(option);

}

var allemployees = JSON.parse(localStorage.getItem('employeesList'));
for (i= 0; i < allemployees.length; i++) {
    var option = document.createElement('option');
    option.value = allemployees[i].name;
    option.text = allemployees[i].name;
    var selectemployee = document.getElementById('Ename');
    selectemployee.appendChild(option);

}

var employees = [];

if (JSON.parse(localStorage.getItem('attendanceList')) != null) {
    employees = JSON.parse(localStorage.getItem('attendanceList'));
    displayEmployee();
}

addBtn.addEventListener('click', function() {
    var isValid = true;

    if (!validEmployeeId()) {
        isValid = false;
    }
    if (!validEmployeeName()) {
        isValid = false;
    }
    if (!validEmployeeDate()) {
        isValid = false;
    }
    if (!validEmployeeTimeIn()) {
        isValid = false;
    }
    if (!validEmployeeTimeOut()) {
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

resetBtn.addEventListener('click', function() {
    resetForm();
});

function addEmployee() {
    var employee = {
        empid: empIdInp.value,
        name: empNameInp.value,
        date: empDateInp.value,
        timeIn: empTimeInInp.value,
        timeOut: empTimeOutInp.value,
    };
    employees.push(employee);
    localStorage.setItem('attendanceList', JSON.stringify(employees));
}

function displayEmployee() {
    var row = '';
    for (var i = 0; i < employees.length; i++) {
        row += '<tr>' + 
            '<td>' + (i + 1) + '</td>' +
            '<td>' + employees[i].empid + '</td>' +
            '<td>' + employees[i].name + '</td>' +
            '<td>' + employees[i].date + '</td>' +
            '<td>' + employees[i].timeIn + '</td>' + 
            '<td>' + employees[i].timeOut + '</td>' +
            '<td><button class="btn btn-danger" onclick="deleteEmployee(' + i + ')">Delete</button></td>' +
            '</tr>';
    }
    document.getElementById('AttendanceTable').innerHTML = row;
}

function resetForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
    }
    alertEmpid.classList.add('d-none');
    alertName.classList.add('d-none');
    alertDate.classList.add('d-none');
    alertTimeIn.classList.add('d-none');
    alertTimeOut.classList.add('d-none');
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployee();
    localStorage.setItem('attendanceList', JSON.stringify(employees));
}

function getEmployeeInfo(index) {
    currentIndex = index;
    var currentEmployee = employees[index];
    empIdInp.value = currentEmployee.empid;
    empNameInp.value = currentEmployee.name;
    empDateInp.value = currentEmployee.date;
    empTimeInInp.value = currentEmployee.timeIn;
    empTimeOutInp.value = currentEmployee.timeOut;
    addBtn.style.display = 'none';
}

function validEmployeeId() {
    var regexEmpid = /^[A-Za-z0-9]{5,10}$/;
    if (regexEmpid.test(empIdInp.value)) {
        empIdInp.classList.add('is-valid');
        empIdInp.classList.remove('is-invalid');
        alertEmpid.classList.add('d-none');
        return true;
    } else {
        empIdInp.classList.add('is-invalid');
        empIdInp.classList.remove('is-valid');
        alertEmpid.classList.remove('d-none');
        return false;
    }
}

function validEmployeeName() {
    var regexName = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    if (regexName.test(empNameInp.value)) {
        empNameInp.classList.add('is-valid');
        empNameInp.classList.remove('is-invalid');
        alertName.classList.add('d-none');
        return true;
    } else {
        empNameInp.classList.add('is-invalid');
        empNameInp.classList.remove('is-valid');
        alertName.classList.remove('d-none');
        return false;
    }
}

function validEmployeeDate() {
    if (empDateInp.value !== '') {
        empDateInp.classList.add('is-valid');
        empDateInp.classList.remove('is-invalid');
        alertDate.classList.add('d-none');
        return true;
    } else {
        empDateInp.classList.add('is-invalid');
        empDateInp.classList.remove('is-valid');
        alertDate.classList.remove('d-none');
        return false;
    }
}

function validEmployeeTimeIn() {
    var regexTimeIn = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (regexTimeIn.test(empTimeInInp.value)) {
        empTimeInInp.classList.add('is-valid');
        empTimeInInp.classList.remove('is-invalid');
        alertTimeIn.classList.add('d-none');
        return true;
    } else {
        empTimeInInp.classList.add('is-invalid');
        empTimeInInp.classList.remove('is-valid');
        alertTimeIn.classList.remove('d-none');
        return false;
    }
}

function validEmployeeTimeOut() {
    var regexTimeOut = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (regexTimeOut.test(empTimeOutInp.value)) {
        empTimeOutInp.classList.add('is-valid');
        empTimeOutInp.classList.remove('is-invalid');
        alertTimeOut.classList.add('d-none');
        return true;
    } else {
        empTimeOutInp.classList.add('is-invalid');
        empTimeOutInp.classList.remove('is-valid');
        alertTimeOut.classList.remove('d-none');
        return false;
    }
}

function isEmployeeExist() {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].empid.toLowerCase() === empIdInp.value.toLowerCase()) {
            return true;
        }
    }
    return false;
}

empIdInp.addEventListener('input', validEmployeeId);
empNameInp.addEventListener('input', validEmployeeName);
empDateInp.addEventListener('input', validEmployeeDate);
empTimeInInp.addEventListener('input', validEmployeeTimeIn);
empTimeOutInp.addEventListener('input', validEmployeeTimeOut);