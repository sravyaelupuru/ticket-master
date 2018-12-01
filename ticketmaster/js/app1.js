const url='http://dct-api-data.herokuapp.com/tickets?api_key=9f2be1163b3bde4c';

let ticketsHandle = document.getElementById('tickets');
let allHandle=document.getElementById('all');
let highHandle=document.getElementById('high');
let mediumHandle=document.getElementById('medium');
let lowHandle=document.getElementById('low');
let countHandle=document.getElementById('count');
let count=0;
fetch(url).then(response => response.json()).then(data=>{
     tickets=data;
         let output="";
        function createTicket(ticket){
            
            let tr=document.createElement('tr');

            let tdCode=document.createElement('td');
            let textCode=document.createTextNode(ticket.ticket_code);
            tdCode.appendChild(textCode);
            tr.appendChild(tdCode);

            let tdName=document.createElement('td');
            let textName=document.createTextNode(ticket.name);
            tdName.appendChild(textName);
            tr.appendChild(tdName);

            let tddep=document.createElement('td');
            let textdep=document.createTextNode(ticket.department);
            tddep.appendChild(textdep);
            tr.appendChild(tddep);

            let tdPriority=document.createElement('td');
            let textPriority=document.createTextNode(ticket.priority);
            tdPriority.appendChild(textPriority);
            tr.appendChild(tdPriority);

            let tdMsg=document.createElement('td');
            let textMsg=document.createTextNode(ticket.message);
            tdMsg.appendChild(textMsg);
            tr.appendChild(tdMsg);

            let tdStatus=document.createElement('td');
            let textStatus=document.createTextNode(ticket.status);
            tdStatus.appendChild(textStatus);
            tr.appendChild(tdStatus);

            ticketsHandle.appendChild(tr);
            //count++;
            countHandle.innerHTML=++count;
        }
    tickets.forEach((ticket) =>{
        createTicket(ticket);
    });
    allHandle.addEventListener('click',function(){
        ticketsHandle.innerHTML='';
        count=0;
        tickets.forEach((ticket) =>{
            createTicket(ticket);
            });
    },false);
    function repeat(){
        ticketsHandle.innerHTML='';
             count=0
            results.forEach((result)=>{
                createTicket(result);  
            })
    }
      highHandle.addEventListener('click',function(){
            var results=tickets.filter(ticket => ticket.priority=="High");
             ticketsHandle.innerHTML='';
             count=0
            results.forEach((result)=>{
                createTicket(result);  
            })
        },false);
        lowHandle.addEventListener('click',function(){
            var results=tickets.filter(ticket => ticket.priority=="Low");
             ticketsHandle.innerHTML='';
             count=0;
            results.forEach((result)=>{
                createTicket(result);  
            })
        },false);
        mediumHandle.addEventListener('click',function(){
            var results=tickets.filter(ticket => ticket.priority=="Medium");
             ticketsHandle.innerHTML='';
             count=0;
            results.forEach((result)=>{
                createTicket(result);  
            })
        },false);
    
}).catch((err) =>{
    console.log(err);
})

            
