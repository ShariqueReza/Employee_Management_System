var empDeptInp = document.getElementById('newDept');
var deptStatusInp = document.getElementById('deptStatus');

var addBtn = document.getElementById('addDeptBtn');

var inputs = document.querySelectorAll('.form-control');
var currentIndex;

var alertDept = document.getElementById('alertnewdept');
var alertDeptStatus = document.getElementById('alertDeptStatus');

var departments = [];

if (JSON.parse(localStorage.getItem('departmentsList') != null)) {
    departments = JSON.parse(localStorage.getItem('departmentsList'));
    displayDepartment();
}


addBtn.addEventListener('click', function() {
    var isValid = true;

    if (!validEmployeeDepartment()) {
        isValid = false;
    }
    if (!validDeptStatus()) {
        isValid = false;
    }
    if (isDepartmentExist()) {
        alert('This Department already exists');
        isValid = false;
    }

    if (isValid) {
        addDepartment();
        displayDepartment();
        resetForm();
    }
});

function addDepartment() {
    var department = {
        name: empDeptInp.value,
        status: deptStatusInp.value
    };
    departments.push(department);
    localStorage.setItem('departmentsList', JSON.stringify(departments));
}

function displayDepartment() {
    var row = '';
    for (var i = 0; i < departments.length; i++) {
        row += '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td>' + departments[i].name + '</td>' +
            '<td>' + departments[i].status + '</td>' +
            '<td><button class="btn btn-danger" onclick = "deleteDepartment(' + i + ')">Delete</button></td>' +
            '</tr>';
    }
    document.getElementById('DeptTable').innerHTML = row;
}

function resetForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
    }
    alertDept.classList.add('d-none');
    alertDeptStatus.classList.add('d-none');
}

function deleteDepartment(index) {
    departments.splice(index, 1);
    displayDepartment();
    localStorage.setItem('departmentsList', JSON.stringify(departments));
}

function validEmployeeDepartment() {
    var regexName = /^[A-Z][A-Za-z\s()]{1,29}$/;
    if (regexName.test(empDeptInp.value)) {
        empDeptInp.classList.add('is-valid');
        empDeptInp.classList.remove('is-invalid');
        alertDept.classList.add('d-none');
        return true;
    }
    else
    {
        empDeptInp.classList.add('is-invalid');
        empDeptInp.classList.remove('is-valid');
        alertDept.classList.remove('d-none');
        return false;
    }
}

function validDeptStatus() {
    if (deptStatusInp.value !== '') {
        deptStatusInp.classList.add('is-valid');
        deptStatusInp.classList.remove('is-invalid');
        alertDeptStatus.classList.add('d-none');
        return true;
    }
    else
    {
        deptStatusInp.classList.add('is-invalid');
        deptStatusInp.classList.remove('is-valid');
        alertDeptStatus.classList.remove('d-none');
        return false;
    }
}

function isDepartmentExist() {
    for (var i = 0; i < departments.length; i++) {
        if (departments[i].name.toLowerCase() === empDeptInp.value.toLowerCase()) {
            return true;
        }
    }
    return false;
}

empDeptInp.addEventListener('input', validEmployeeDepartment);
deptStatusInp.addEventListener('input', validDeptStatus);
