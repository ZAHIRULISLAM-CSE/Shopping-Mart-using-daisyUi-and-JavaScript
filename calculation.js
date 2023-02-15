let count=0;
document.getElementById("heart-btn").addEventListener("click",function(){
buttonEventHandle("heart-title","heart-price","heart-quantity","heart-btn","total-price");
})
document.getElementById("coffee-btn").addEventListener("click",function(){
buttonEventHandle("coffee-title","coffee-price","coffee-quantity","coffee-btn","total-price");
})
document.getElementById("panda-btn").addEventListener("click",function(){
buttonEventHandle("panda-title","panda-price","panda-quantity","panda-btn","total-price");
 })
 document.getElementById("umbrella-btn").addEventListener("click",function(){
buttonEventHandle("umbrella-title","umbrella-price","umbrella-quantity","umbrella-btn","total-price");
 })
 document.getElementById("vue-btn").addEventListener("click",function(){
    const name= getName("vue-title");
    const price=getFieldValue("vue-price");
    if(price<0){
        alert("only positive value is accepted");
        return;
    }
    if(isNaN(price)){
        alert("put valid input");
        return;
    }
    const quantity=getFieldQuantity("vue-quantity");
    if(quantity<0){
        alert("only positive value is accepted");
        return;
    }
    if(isNaN(quantity)){
        alert("put valid input");
        return;
    }
    const total=getTotal(price,quantity,1)
    count++;
    setTableValue(count,name,price,quantity,total);
    setDisable("vue-btn");
    let totalPrice=getValue("total-price");
    totalPrice=totalPrice+total;
    document.getElementById("total-price").innerHTML=totalPrice;
})

 