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