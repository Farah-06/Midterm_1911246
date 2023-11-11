function process(){
    var person = document.getElementById("nameBox").value ;
    var Products = parseInt(document.getElementById("ProductBox").value) ;
    
    var Price = parseInt(document.getElementById("PriceBox").value) ;

    
    if(Products*Price > 5000) {
         
        document.getElementById("content").innerHTML=
        
         `<h4>Hello ${person}, You will get 40 Points and 10% Discount.Happy Shopping. <h4> `;
      }

      else if(Products*Price > 2000) {
         
        document.getElementById("content").innerHTML=
        
         `<h4>Hello ${person}, You will get 30 Points and 5% Discount.Happy Shopping. <h4> `;
      }

      else if(Products*Price > 1000) {
         
        document.getElementById("content").innerHTML=
        
         `<h4>Hello ${person}, You will get 20 Points.Happy Shopping. <h4> `;
      }

    else{
        document.getElementById("content").innerHTML=
        
        `<h4> Sorry ${person}, No Points and Discount this time. </h4> `;
    }
}