function getName(id){
   return document.getElementById(id).innerHTML;
}
function getValue(id){
    let value= document.getElementById(id).innerHTML;
    value=parseInt(value);
    return value;
}
function getFieldValue(id){
    let value= document.getElementById(id).value;
    value=parseInt(value);
    return value;
}
function getQuantity(id){
    let quantity= document.getElementById(id).innerHTML;
    quantity=parseInt(quantity);
    return quantity;
}
function getFieldQuantity(id){
    let quantity= document.getElementById(id).value;
    quantity=parseInt(quantity);
    return quantity;
}
function getTotal(price,quantity,symbol){
   if(symbol==1){
    return price*quantity;
   }
}
function setTableValue(count,name,price,quantity,total){
    const tr=document.createElement("tr");
    const parent=document.getElementById("t-body");
    tr.innerHTML=`
    <td>${count}</td>
    <td>${name}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td>${total}</td>
    `
    parent.appendChild(tr);
}
function setDisable(id){
    document.getElementById(id).setAttribute("disabled",true);
}
