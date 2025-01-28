var empIdInp = document.getElementById('Eid');
var empNameInp = document.getElementById('Ename');
var empMobileInp = document.getElementById('Emobile');
var empEmailInp = document.getElementById('Eemail');
var empAddInp = document.getElementById('Eadd');
var empDeptInp = document.getElementById('Edept');
var empRoleInp = document.getElementById('Erole');

var addBtn = document.getElementById('addBtn');
var resetBtn = document.getElementById('resetBtn');
var updateBtn = document.getElementById('updateBtn');

var inputs = document.querySelectorAll('.form-control');
var currentIndex;

// Alerts
var alertEmpid = document.getElementById('alertEmpid');
var alertName = document.getElementById('alertName');
var alertMobile = document.getElementById('alertMobile');
var alertEmail = document.getElementById('alertEmail');
var alertDept = document.getElementById('alertDept');
var alertRole = document.getElementById('alertRole');

    // displayDepartment();

var alldepartments = JSON.parse(localStorage.getItem('departmentsList'));
for (i= 0; i < alldepartments.length; i++) {
    var option = document.createElement('option');
    option.value = alldepartments[i].name;
    option.text = alldepartments[i].name;
    var selectdepartment = document.getElementById('Edept');
    selectdepartment.appendChild(option);
}


var employees = [];

if (JSON.parse(localStorage.getItem('employeesList')) != null) {
    employees = JSON.parse(localStorage.getItem('employeesList'));
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
    if (!validEmployeeMobile()) {
        isValid = false;
    }
    if (!validEmployeeEmail()) {
        isValid = false;
    }
    if (!validEmployeeDepartment()) {
        isValid = false;
    }
    if (!validEmployeeRole()) {
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

updateBtn.addEventListener('click', function() {
    updateEmployee();
    displayEmployee();
    resetForm();
    updateBtn.style.display = "none";
});

function addEmployee() {
    var employee = {
        empid: empIdInp.value,
        name: empNameInp.value,
        mobile: empMobileInp.value,
        email: empEmailInp.value,
        address: empAddInp.value,
        department: empDeptInp.value,
        role: empRoleInp.value,
    };
    employees.push(employee);
    localStorage.setItem('employeesList', JSON.stringify(employees));
}

function displayEmployee() {
    var row = '';
    for (var i = 0; i < employees.length; i++) {
        row += '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td>' + employees[i].empid + '</td>' +
            '<td>' + employees[i].name + '</td>' +
            '<td>' + employees[i].mobile + '</td>' +
            '<td>' + employees[i].email + '</td>' +
            '<td>' + employees[i].address + '</td>' +
            '<td>' + employees[i].department + '</td>' +
            '<td>' + employees[i].role + '</td>' +
            '<td><button class="btn btn-warning" onclick="getEmployeeInfo(' + i + ')">Update</button></td>' +
            '<td><button class="btn btn-danger" onclick="deleteEmployee(' + i + ')">Delete</button></td>' +
            '</tr>';
    }
    document.getElementById('myTable').innerHTML = row;
}

function resetForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
    }
    alertEmpid.classList.add('d-none');
    alertName.classList.add('d-none');
    alertMobile.classList.add('d-none');
    alertEmail.classList.add('d-none');
    alertDept.classList.add('d-none');
    alertRole.classList.add('d-none');
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployee();
    localStorage.setItem('employeesList', JSON.stringify(employees));
}

function getEmployeeInfo(index) {
    currentIndex = index;
    var currentEmployee = employees[index];
    empIdInp.value = currentEmployee.empid;
    empNameInp.value = currentEmployee.name;
    empMobileInp.value = currentEmployee.mobile;
    empEmailInp.value = currentEmployee.email;
    empAddInp.value = currentEmployee.address;
    empDeptInp.value = currentEmployee.department;
    empRoleInp.value = currentEmployee.role;
    updateBtn.style.display = "block";
    addBtn.style.display = 'none';
}

function updateEmployee() {
    var employee = {
        empid: empIdInp.value,
        name: empNameInp.value,
        mobile: empMobileInp.value,
        email: empEmailInp.value,
        address: empAddInp.value,
        department: empDeptInp.value,
        role: empRoleInp.value,
    };
    employees[currentIndex] = employee;
    localStorage.setItem('employeesList', JSON.stringify(employees));
    addBtn.style.display = 'block';
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

function validEmployeeMobile() {
    var regexMobile = /^[0-9]{10}$/;
    if (regexMobile.test(empMobileInp.value)) {
        empMobileInp.classList.add('is-valid');
        empMobileInp.classList.remove('is-invalid');
        alertMobile.classList.add('d-none');
        return true;
    } else {
        empMobileInp.classList.add('is-invalid');
        empMobileInp.classList.remove('is-valid');
        alertMobile.classList.remove('d-none');
        return false;
    }
}

function validEmployeeEmail() {
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(empEmailInp.value)) {
        empEmailInp.classList.add('is-valid');
        empEmailInp.classList.remove('is-invalid');
        alertEmail.classList.add('d-none');
        return true;
    } else {
        empEmailInp.classList.add('is-invalid');
        empEmailInp.classList.remove('is-valid');
        alertEmail.classList.remove('d-none');
        return false;
    }
}

function validEmployeeDepartment() {
    if (empDeptInp.value !== '') {
        empDeptInp.classList.add('is-valid');
        empDeptInp.classList.remove('is-invalid');
        alertDept.classList.add('d-none');
        return true;
    } else {
        empDeptInp.classList.add('is-invalid');
        empDeptInp.classList.remove('is-valid');
        alertDept.classList.remove('d-none');
        return false;
    }
}

function validEmployeeRole() {
    if (empRoleInp.value !== '') {
        empRoleInp.classList.add('is-valid');
        empRoleInp.classList.remove('is-invalid');
        alertRole.classList.add('d-none');
        return true;
    } else {
        empRoleInp.classList.add('is-invalid');
        empRoleInp.classList.remove('is-valid');
        alertRole.classList.remove('d-none');
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
empMobileInp.addEventListener('input', validEmployeeMobile);
empEmailInp.addEventListener('input', validEmployeeEmail);
empDeptInp.addEventListener('input', validEmployeeDepartment);
empRoleInp.addEventListener('input', validEmployeeRole);
