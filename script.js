const billInput = document.querySelector("#billInput");
const tipsInput = Array.from(document.querySelectorAll(".tipButtons button"));
const customInput = document.querySelector("#customInput");
const peopleInput = document.querySelector("#peopleInput")

const tipResult = document.querySelector(".tipAmount h3");
const totalResult = document.querySelector(".totalAmount h3");

const error = document.querySelector(".error");

const resetBtn = document.querySelector("#resetButton");

let billValue = 0;
let tipValue = 0;
let peopleQuantity = 0; 


let tipAmount = 0;
let total = 0;


billInput.addEventListener("input", (event) => {
    if(event.target.value === ""){
        billValue = 0;
    }else{
        billValue = parseFloat(event.target.value);
        calculation();
    }
});

tipsInput.map((button) => {
    button.addEventListener("click", (event) => {
        tipValue = parseInt(event.target.innerText);
        calculation();
    })
})

customInput.addEventListener("input", (event) => {
    tipValue = parseFloat(event.target.value);
    calculation();
})

peopleInput.addEventListener("input", (event) => {
    peopleQuantity = parseInt(event.target.value);

    if (event.target.value == 0) {
        error.style.display = "block";
        peopleInput.style.border = "1px solid #E17457"
    }else{
        error.style.display = "none";
    }
    calculation();
})

function calculation(){
    if(peopleQuantity && tipValue){
        tipAmount = billValue * (tipValue/100) / peopleQuantity;
        total = billValue / peopleQuantity + tipAmount;
        tipResult.innerText = `$${tipAmount.toFixed(2)}`;
        totalResult.innerText = `$${total.toFixed(2)}`;
    }else{
        tipResult.innerText = `$0.00`;
        totalResult.innerText = `$0.00`;
    }
}

function changeCollor(button){
    button.addEventListener("click", () => {
        button.style.backgroundColor = "#26c2ae";
    })
}

resetBtn.addEventListener("click", () => {
    billInput.value = "";
    tipResult.innerText = `$0.00`;
    customInput.value = "";
    peopleInput.value = "";
    totalResult.innerText = `$0.00`;
})