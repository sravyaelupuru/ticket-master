const url='http://dct-api-data.herokuapp.com/tickets?api_key=9f2be1163b3bde4c';

let ticketsHandle = document.getElementById('tickets');
axios.get(url).then((response) =>{
        let tickets=response.data;
        let output='';
        tickets.forEach((ticket) =>{
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
        })

    }).catch((err) =>{
        console.log(err);
    })
