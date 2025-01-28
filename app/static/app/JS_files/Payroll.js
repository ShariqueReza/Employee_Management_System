var empNameInp = document.getElementById('Ename');
var empRoleInp = document.getElementById('Erole');
var basicSalaryInp = document.getElementById('BasicSalary');
var allowanceInp = document.getElementById('Allowance');
var taxInp = document.getElementById('Tax');
var netSalaryInp = document.getElementById('NetSalary');

var addBtn = document.getElementById('addBtn');
var resetBtn = document.getElementById('resetBtn');
var updateBtn = document.getElementById('updateBtn');

var inputs = document.querySelectorAll('.form-control');
var currentIndex;

var alertName = document.getElementById('alertName');
var alertRole = document.getElementById('alertRole');
var alertBasicSalary = document.getElementById('alertBasicSalary');
var alertAllowance = document.getElementById('alertAllowance');
var alertTax = document.getElementById('alertTax');
var alertNetSalary = document.getElementById('alertNetSalary');

var allemployees = JSON.parse(localStorage.getItem('employeesList'));
for (i= 0; i < allemployees.length; i++) {
    var option = document.createElement('option');
    option.value = allemployees[i].name;
    option.text = allemployees[i].name;
    var selectemployee = document.getElementById('Ename');
    selectemployee.appendChild(option);

}

basicSalaryInp.addEventListener('input', calculateNetSalary);
allowanceInp.addEventListener('input', calculateNetSalary);
taxInp.addEventListener('input', calculateNetSalary);

var employees = [];

if (JSON.parse(localStorage.getItem('payrollList') != null)) {
    employees = JSON.parse(localStorage.getItem('payrollList'));
    displayEmployee();
}

addBtn.addEventListener('click', function () {
    var isValid = true;

    if (!validEmployeeName()) {
        isValid = false;
    }
    if (!validEmployeeRole()) {
        isValid = false;
    }
    if (!validBasicSalary()) {
        isValid = false;
    }
    if (!validAllowance()) {
        isValid = false;
    }
    if (!validTax()) {
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
        name: empNameInp.value,
        role: empRoleInp.value,
        basicSalary: basicSalaryInp.value,
        allowance: allowanceInp.value,
        tax: taxInp.value,
        netSalary: netSalaryInp.value,
    };
    employees.push(employee);
    localStorage.setItem('payrollList', JSON.stringify(employees));
}

function displayEmployee() {
    var row = '';
    for (var i = 0; i < employees.length; i++) {
        row += '<tr>' + 
        '<td>' + (i + 1) + '</td>' + 
        '<td>' + employees[i].name + '</td>' + 
        '<td>' + employees[i].role + '</td>' + 
        '<td>' + employees[i].basicSalary + '</td>' + 
        '<td>' + employees[i].allowance + '</td>' +
        '<td>' + employees[i].tax + '</td>' + 
        '<td>' + employees[i].netSalary + '</td>' + 
        '<td><button class="btn btn-warning" onclick="getEmployeeInfo(' + i + ')">Update</button></td>' + 
        '<td><button class="btn btn-danger" onclick="deleteEmployee(' + i + ')">Delete</button></td>' + 
        '</tr>';
    }
    document.getElementById('payrollTable').innerHTML = row;
}

function resetForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
    }
    alertName.classList.add('d-none');
    alertRole.classList.add('d-none');
    alertBasicSalary.classList.add('d-none');
    alertAllowance.classList.add('d-none');
    alertTax.classList.add('d-none');
    alertNetSalary.classList.add('d-none');
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployee();
    localStorage.setItem('payrollList', JSON.stringify(employees));
}

function getEmployeeInfo(index) {
    currentIndex = index;
    var currentEmployee = employees[index];
    empNameInp.value = currentEmployee.name;
    empRoleInp.value = currentEmployee.role;
    basicSalaryInp.value = currentEmployee.basicSalary;
    allowanceInp.value = currentEmployee.allowance;
    taxInp.value = currentEmployee.tax;
    netSalaryInp.value = currentEmployee.netSalary;
    updateBtn.style.display = "block";
    addBtn.style.display = 'none';
}

function updateEmployee() {
    var employee = {
        name: empNameInp.value,
        role: empRoleInp.value,
        basicSalary: basicSalaryInp.value,
        allowance: allowanceInp.value,
        tax: taxInp.value,
        netSalary: netSalaryInp.value,
    };
    employees[currentIndex] = employee;
    localStorage.setItem('payrollList', JSON.stringify(employees));
    addBtn.style.display = 'block';
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

function validBasicSalary() {
    var regexBasicSalary = /^\d{1,8}(\.\d{1,2})?$/;
    if (regexBasicSalary.test(basicSalaryInp.value)) {
        basicSalaryInp.classList.add('is-valid');
        basicSalaryInp.classList.remove('is-invalid');
        alertBasicSalary.classList.add('d-none');
        return true;
    } else {
        basicSalaryInp.classList.add('is-invalid');
        basicSalaryInp.classList.remove('is-valid');
        alertBasicSalary.classList.remove('d-none');
        return false;
    }
}

function validAllowance() {
    var regexAllowance = /^\d{1,8}(\.\d{1,2})?$/;
    if (regexAllowance.test(allowanceInp.value)) {
        allowanceInp.classList.add('is-valid');
        allowanceInp.classList.remove('is-invalid');
        alertAllowance.classList.add('d-none');
        return true;
    }
    else {
        allowanceInp.classList.add('is-invalid');
        allowanceInp.classList.remove('is-valid');
        alertAllowance.classList.remove('d-none');
        return false;
    }
}

function validTax() {
    var regexTax = /^\d{1,8}(\.\d{1,2})?$/;
    if (regexTax.test(taxInp.value)) {
        taxInp.classList.add('is-valid');
        taxInp.classList.remove('is-invalid');
        alertTax.classList.add('d-none');
        return true;
    }
    else {
        taxInp.classList.add('is-invalid');
        taxInp.classList.remove('is-valid');
        alertTax.classList.remove('d-none');
        return false;
    }
}

function calculateNetSalary() {
    var _basicSalary = parseFloat(basicSalaryInp.value);
    var _allowance = parseFloat(allowanceInp.value);
    var _tax = parseFloat(taxInp.value);
    var netSalary = _basicSalary + _allowance - _tax;
    netSalaryInp.value = netSalary;
}

function isEmployeeExist() {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].name.toLowerCase() === empNameInp.value.toLowerCase()) {
            return true;
        }
    }
    return false;
}

empNameInp.addEventListener('input', validEmployeeName);
empRoleInp.addEventListener('input', validEmployeeRole);
basicSalaryInp.addEventListener('input', validBasicSalary);
allowanceInp.addEventListener('input', validAllowance);
taxInp.addEventListener('input', validTax);
netSalaryInp.addEventListener('input', calculateNetSalary);