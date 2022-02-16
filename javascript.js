"use strict";

const button = document.getElementById("add");

function create() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let date = document.getElementById("date").value;
    let table = document.getElementById("table");
    
    let tr = document.createElement("tr");

    let name_td = document.createElement("td");
    let date_td = document.createElement("td");
    let amount_td = document.createElement("td");
    let del_td = document.createElement("td");

    let name_txt = document.createTextNode(name);
    let amount_txt = document.createTextNode("€ " + amount);
    let date_txt = document.createTextNode(date);

    let del_txt = document.createElement("button");
    del_txt.textContent = "X";

    name_td.appendChild(name_txt);
    date_td.appendChild(date_txt);
    amount_td.appendChild(amount_txt);
    del_td.appendChild(del_txt);

    tr.appendChild(name_td);
    tr.appendChild(date_td);
    tr.appendChild(amount_td);
    tr.appendChild(del_td);

    del_txt.addEventListener("click", function() {
        this.parentNode.parentNode.remove();
    });

    table.appendChild(tr);
}

button.addEventListener("click", function() {
    let name_ = document.getElementById("name");
    let date_ = document.getElementById("date");
    let amount_ = document.getElementById("amount");

    if(name_.value === "" || date_.value === "" || amount.value === "") {
        alert("Fill up the form!");
    }
    else {
        create();
        name_.value = "";
        date_.value = "";
        amount_.value = "";
        name_.focus();        
    }
});