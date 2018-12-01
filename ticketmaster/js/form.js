/*const employees=[
    {name:"Anurag",deparment:"Technical"},
    {name:"Bhargav",department:"Hr"},
    {name:"Farooq",department:"sales"},
    {name:"John",department:"Technical"}
]
const posturl='http://dct-api-data.herokuapp.com/tickets?api_key=9f2be1163b3bde4c';
const tableHandle=document.getElementById('tickets');
const formHandle=document.getElementById('form');
const nameHandle=document.getElementById('name');
const departmentHandle=document.getElementById('department');
const priorityHandle=document.getElementById()
const nameErrorHandle=document.getElementById('nameError');
const departmentErrorHandle=document.getElementById('departmentError');
const priorityErrorHandle=document.getElementById('priority');
const messageErrorHandle=document.getElementById('message');
const employeeHandle=document.getElementById('employee')

let formValidateObj={
    name:false,
    department:false,
    priority:false,
    message:false
}

function validateName(){
    if(nameHandle.value==''){
        nameErrorHandle.innerHTML = "can not be blank";
        formValidateObj.name=false;
    }else{
        nameErrorHandle.innerHTML='';
        formValidateObj.name=true;
    }
}

function validateDepatment(){
    if(departmentErrorHandle.value==''){
        departmentErrorHandle.innerHTML = "can not be blank";
        formValidateObj.department=false;
    }else{
        departmentErrorHandle.innerHTML='';
        formValidateObj.department=true;
    }
}

function validatePriority(){
    if(priorityErrorHandle.value==''){
        priorityErrorHandle.innerHTML="can not be blank ";
        formValidateObj.priority=false;
    }else{
        priorityErrorHandle.innerHTML='';
        formValidateObj.priority=true;
    }
}

function validateMessage(){
    if(messageErrorHandle.value=''){
        messageErrorHandle.innerHTML='can not be blank';
        formValidateObj.message=false;
    }else {
        messageErrorHandle.innerHTML='';
        if(messageErrorHandle.innerHTML.split().length>6){
            formValidateObj.priority=true;
        }
    }
}

formHandle.addEventListener('submit',function(e){
    e.preventDefault();
    validateName();
    validateDepatment();
    validatePriority();
    validateMessage();
     if(Object.values(formValidateObj).includes(false)){
         console.log("errors in form")
     }else{
    let formData={
        name:nameHandle.value,
        department:departmentHandle.value,
        priority:priorityHandle.value,
        message:messageHandle.value
    };

console.log("all validations passed");
axios.post(posturl,formData)
    .then(function(response){
        var result=response.data;
         
}).catch(function(err){
    console.log(err.code);
    
});  
}  
},false)

departmentHandle.addEventListener('change',function(){{
    let departmentSelected=departmentHandle.value;
    let filteredEmployees=employees.filter(function(employee){
        return employee.department==departmentSelected;
    });
    employeeHandle.innerHTML='';
    filteredEmployees.forEach(function(employee){
        let option=document.createElement('option');
        option.setAttribute('value',employee.name);
        option.innerHTML=employee.name;
        employeeHandle.appendChild(option);
    })
}},false)*/

const posturl='http://dct-api-data.herokuapp.com/tickets?api_key=9f2be1163b3bde4c';
const tableHandle=document.getElementById('tickets');
const formHandle=document.getElementById('addTicket');
const nameHandle=document.getElementById('name');
const departmentHandle=document.getElementById('department');
const priorityHandle=document.getElementById('priority');
const messageHandle=document.getElementById('message');
formHandle.addEventListener('submit',function(e){
    e.preventDefault();
    let formData={
        name:nameHandle.value,
        department:departmentHandle.value,
        priority:priorityHandle.value,
        message:messageHandle.value
    };
    console.log(formData);
axios.post(posturl,formData)
    .then(function(response){
        var ticket=response.data;
        tableHandle.innerHTML+=
        `<tr>
        <td>${ticket.ticket_code}</td>
        <td>${ticket.name}</td>
        <td>${ticket.department}</td>
        <td>${ticket.priority}</td>
        <td>${ticket.message}</td>`;
         
}).catch(function(err){
    console.log(err.code);
    
})

},false);
