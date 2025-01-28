var empIdInp = document.getElementById('Eid');
var empNameInp = document.getElementById('Ename');
var FromInp = document.getElementById('from');
var ToInp = document.getElementById('to');
var ReasonInp = document.getElementById('reason');

var addBtn = document.getElementById('addBtn');
var resetBtn = document.getElementById('resetBtn');
var updateBtn = document.getElementById('updateBtn');

var inputs = document.querySelectorAll('.form-control');
var currentIndex;

var alertEmpid = document.getElementById('alertEmpid');
var alertName = document.getElementById('alertName');
var alertFrom = document.getElementById('alertFrom');
var alertTo = document.getElementById('alertTo');
var alertReason = document.getElementById('alertReason');

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

var leaves = [];

if (JSON.parse(localStorage.getItem('leavesList')) != null) {
    leaves = JSON.parse(localStorage.getItem('leavesList'));
    displayLeave();
}

addBtn.addEventListener('click', function() {
    var isValid= true;

    if (!validEmployeeId()) {
        isValid = false;
    }
    if (!validEmployeeName()) {
        isValid = false;
    }
    if (!validFrom()) {
        isValid = false;
    }
    if (!validTo()) {
        isValid = false;
    }
    if (!validReason()) {
        isValid = false;
    }
    if (isEmployeeExist()) {
        alert('This Employee already exists');
        isValid = false;
    }

    if (isValid) {
        addLeave();
        displayLeave();
        resetForm();
    }
});

resetBtn.addEventListener('click', function() {
    resetForm();
});

updateBtn.addEventListener('click', function() {
    updateLeave();
    displayLeave();
    resetForm();
    updateBtn.style.display = "none";
});

function addLeave() {
    var leave = {
        empid: empIdInp.value,
        name: empNameInp.value,
        from: FromInp.value,
        to: ToInp.value,
        reason: ReasonInp.value,
    };
    leaves.push(leave);
    localStorage.setItem('leavesList', JSON.stringify(leaves));
}


function displayLeave() {
    var row = '';
    for (var i = 0; i < leaves.length; i++) {
        row += '<tr>' + 
        '<td>' + (i + 1) + '</td>' + 
        '<td>' + leaves[i].empid + '</td>' +
        '<td>' + leaves[i].name + '</td>' + 
        '<td>' + leaves[i].from + '</td>' + 
        '<td>' + leaves[i].to + '</td>' +
        '<td>' + leaves[i].reason + '</td>' + 
        '<td><button class="btn btn-warning" onclick="getEmployeeInfo(' + i + ')">Update</button></td>' +
        '<td><button class="btn btn-danger" onclick="deleteLeave(' + i + ')">Delete</button></td>' + 
        '</tr>';
    }
    document.getElementById('LeaveTable').innerHTML = row;
}

function resetForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid');
        inputs[i].classList.remove('is-invalid');
    }
    alertEmpid.classList.add('d-none');
    alertName.classList.add('d-none');
    alertFrom.classList.add('d-none');
    alertTo.classList.add('d-none');
    alertReason.classList.add('d-none');
}

function deleteLeave(index) {
    leaves.splice(index, 1);
    displayLeave();
    localStorage.setItem('leavesList', JSON.stringify(leaves));
}

function getEmployeeInfo(index) {
    currentIndex = index;
    var leave = leaves[index];
    empIdInp.value = leave.empid;
    empNameInp.value = leave.name;
    FromInp.value = leave.from;
    ToInp.value = leave.to;
    ReasonInp.value = leave.reason;
    updateBtn.style.display = 'block';
    addBtn.style.display = 'none';
}

function updateLeave() {
    var leave = {
    empid: empIdInp.value,
    name: empNameInp.value,
    from: FromInp.value,
    to: ToInp.value,
    reason: ReasonInp.value,
    };
    leaves[currentIndex] = leave;
    localStorage.setItem('leavesList', JSON.stringify(leaves));
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

function validFrom() {
    if (FromInp.value !== '') {
        FromInp.classList.add('is-valid');
        FromInp.classList.remove('is-invalid');
        alertFrom.classList.add('d-none');
        return true;
    }
    else {
        FromInp.classList.add('is-invalid');
        FromInp.classList.remove('is-valid');
        alertFrom.classList.remove('d-none');
        return false;
    }
}

function validTo() {
    if (ToInp.value !== '') {
        ToInp.classList.add('is-valid');
        ToInp.classList.remove('is-invalid');
        alertTo.classList.add('d-none');
        return true;
    }
    else
    {
        ToInp.classList.add('is-invalid');
        ToInp.classList.remove('is-valid');
        alertTo.classList.remove('d-none');
        return false;
    }
}

function validReason() {
    regexReason = /^[a-zA-Z0-9\s]+$/;
    if (regexReason.test(ReasonInp.value)) {
        ReasonInp.classList.add('is-valid');
        ReasonInp.classList.remove('is-invalid');
        alertReason.classList.add('d-none');
        return true;
    }
    else
    {
        ReasonInp.classList.add('is-invalid');
        ReasonInp.classList.remove('is-valid');
        alertReason.classList.remove('d-none');
        return false;
    }
}

function isEmployeeExist() {
    for (var i = 0; i < leaves.length; i++) {
        if (leaves[i].empid.toLowerCase() === empIdInp.value.toLowerCase()) {
            return true;
        }
    }
    return false;
}

empIdInp.addEventListener('input', validEmployeeId);
empNameInp.addEventListener('input', validEmployeeName);
FromInp.addEventListener('input', validFrom);
ToInp.addEventListener('input', validTo);
ReasonInp.addEventListener('input', validReason);