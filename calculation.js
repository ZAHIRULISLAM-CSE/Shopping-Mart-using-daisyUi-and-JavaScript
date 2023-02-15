let count=0;
document.getElementById("heart-btn").addEventListener("click",function(){
   const name= getName("heart-title");
   const price=getValue("heart-price");
   const quantity=getQuantity("heart-quantity");
   const total=getTotal(price,quantity,1)
   count++;
   setTableValue(count,name,price,quantity,total);
   setDisable("heart-btn");
})

document.getElementById("coffee-btn").addEventListener("click",function(){
   const name= getName("coffee-title");
   const price=getValue("coffee-price");
   const quantity=getQuantity("coffee-quantity");
   const total=getTotal(price,quantity,1)
   count++;
   setTableValue(count,name,price,quantity,total);
   setDisable("coffee-btn");
})
document.getElementById("panda-btn").addEventListener("click",function(){
    const name= getName("panda-title");
    const price=getValue("panda-price");
    const quantity=getQuantity("panda-quantity");
    const total=getTotal(price,quantity,1)
    count++;
    setTableValue(count,name,price,quantity,total);
    setDisable("panda-btn");
 })
 document.getElementById("umbrella-btn").addEventListener("click",function(){
    const name= getName("umbrella-title");
    const price=getValue("umbrella-price");
    const quantity=getQuantity("umbrella-quantity");
    const total=getTotal(price,quantity,1)
    count++;
    setTableValue(count,name,price,quantity,total);
    setDisable("umbrella-btn");
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

})