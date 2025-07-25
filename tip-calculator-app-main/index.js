'use strict'
const billInput = document.getElementById('bill');
const customTipInput = document.getElementById('tip-custom');
const peopleInput = document.getElementById('people');
const tipSelctorInput = document.querySelectorAll("input[name='tip-percent']");
const tipTotalPerson = document.getElementById('tip-amount');
const totalPerPerson = document.getElementById('total');
const billWarning = document.getElementById('bill-warning');
const peopleWarning = document.getElementById('people-warning');
const resetBtn = document.getElementById('reset-btn');

let currentBill = 0;
let currentTip = 0;
let currentPeople = 0;


const handleBillChange = ()=>{}

const handlePeopleChange = ()=>{
    
}

const handleTipChange = ()=>{
    
}
const handleReset= ()=>{
    billInput.value = '';
    peopleInput.value = '';
    customTipInput = '';
}

const calculate = ()=>{
    if (currentBill <= 0 || currentPeople <= 0 || currentTip <= 0) {
        tipTotalPerson.textContent = '$0.00';
        totalPerPerson.textContent = "$0.00";
        resetBtn.disabled = true;
        return;
    }

    const tipAmount = calculateTip(currentBill, currentTip, currentPeople);
    const totalAmount = calculateTotalPerPerson(currentBill, currentPeople, tipAmount);

    tipTotalPerson.textContent = `$${tipAmount.toFixed(2)}`;
    totalPerPerson.textContent = `$${totalAmount.toFixed(2)}`;

    resetBtn.disabled = false;

}

const calculateTip = (bill, percent, people)=>{
    return (bill * (percent/100))/ people;
}

const calculateTotalPerPerson = (bill, people, tip) => {
    return (bill/people) + tip;
}

const showError = (field)=>{
    if (field === 'bill') {
        billWarning.classList.add('show');
        billInput.classList.add('error');
    } else if (field === 'people') {
        this.peopleWarning.classList.add('show');
        this.peopleInput.classList.add('error');
    }
}

calculate();