// ticket ninja---------------------------------------------
//  dom element initializing
const firstClasss = document.getElementById("firstClass");
const economyClass = document.getElementById("economyClass");
const firstClassIncrease = document.getElementById("firstClassIncrease");
const firstClassDecrease = document.getElementById("firstClassDecrease");
const economyClassIncrease = document.getElementById("economyClassIncrease");
const economyClassDecrease = document.getElementById("economyClassDecrease");
const subTotal = document.getElementById("subTotal");
const vatDis = document.getElementById("vatDis");
const Total = document.getElementById("Total");

// initial quantity
// given constant price
let subTotalValue;
let TotalValue;
let vat;




// increase-functionality-----------------------
// firstClass
firstClassIncrease.addEventListener("click", ()=>{
    let firstClassValue =  firstClass.value;
    var quantity =  parseInt(firstClassValue);
    quantity += 1;
    firstClass.value =  quantity;
    const firstClassTotal =  quantity * 150;
    subTotalValue = firstClassTotal;
    subTotal.innerText = subTotalValue;
    vat = subTotalValue * (10/100);
    vatDis.innerText = vat;
    TotalValue = subTotalValue + vat;
    Total.innerText =  TotalValue;
})
// decrease-functionality-------------------------
firstClassDecrease.addEventListener("click", ()=>{
    firstClassValue =  firstClasss.value;
    var quantity =  parseInt(firstClassValue);
    quantity -= 1;
    firstClasss.value =  quantity;
    if(firstClasss.value < 0){
        quantity = 0;
        firstClasss.value =  quantity;
    }
    else{

        const firstClasssTotal =  subTotalValue -150;
        subTotalValue =  firstClasssTotal;
        subTotal.innerText = subTotalValue;
        vat = subTotalValue * (10/100);
        vatDis.innerText = vat;
        TotalValue = subTotalValue + vat;
        Total.innerText =  TotalValue;
        console.log(subTotalValue)

    }
   
})

// economy
economyClassIncrease.addEventListener("click", ()=>{
    
    let economyClassValue =  economyClass.value;
    var quantity =  parseInt(economyClassValue);
    quantity += 1;
    economyClass.value =  quantity;
    subTotalValue = subTotalValue + 100;
    // let economyClassTotal = economyClassTotal + 100;
    // let ecoSubTotal =  subTotalValue + economyClassTotal
    subTotal.innerText = subTotalValue;
    vat = subTotalValue * (10/100);
    vatDis.innerText = vat;
    TotalValue = subTotalValue + vat;
    Total.innerText =  TotalValue;
})

// // economyClass
economyClassDecrease.addEventListener("click", ()=>{

    economyClassValue =  economyClass.value;
    var quantity =  parseInt(economyClassValue);
    quantity -= 1;
    economyClass.value =  quantity;
    if(economyClass.value < 0){
        quantity = 0;
        economyClass.value =  quantity;
    }
    else{

        subTotalValue =  subTotalValue -100;
        subTotal.innerText = subTotalValue;
        vat = subTotalValue * (10/100);
        vatDis.innerText = vat;
        TotalValue = subTotalValue + vat;
        Total.innerText =  TotalValue;
        console.log(subTotalValue)

    }


   
})

// creating function-------------------

//  function increaseFun(field,quantity){
    
//     const firstClasss = document.getElementById(field);
//     quantity += 1;
//     firstClasss.value =  quantity;
//     console.log(firstClasss.value);
//  }