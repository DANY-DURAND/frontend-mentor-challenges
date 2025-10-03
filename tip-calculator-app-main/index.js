// 'use strict'
// const billInput = document.getElementById('bill');
// const customTipInput = document.getElementById('tip-custom');
// const peopleInput = document.getElementById('people');
// const tipSelctorInput = document.querySelectorAll("input[name='tip-percent']");
// const tipTotalPerson = document.getElementById('tip-amount');
// const totalPerPerson = document.getElementById('total');
// const billWarning = document.getElementById('bill-warning');
// const peopleWarning = document.getElementById('people-warning');
// const resetBtn = document.getElementById('reset-btn');

// let currentBill = 0;
// let currentTip = 0;
// let currentPeople = 0;


// const handleBillChange = ()=>{}

// const handlePeopleChange = ()=>{
    
// }

// const handleTipChange = ()=>{
    
// }
// const handleReset= ()=>{
//     billInput.value = '';
//     peopleInput.value = '';
//     customTipInput = '';
// }

// const calculate = ()=>{
//     if (currentBill <= 0 || currentPeople <= 0 || currentTip <= 0) {
//         tipTotalPerson.textContent = '$0.00';
//         totalPerPerson.textContent = "$0.00";
//         resetBtn.disabled = true;
//         return;
//     }

//     const tipAmount = calculateTip(currentBill, currentTip, currentPeople);
//     const totalAmount = calculateTotalPerPerson(currentBill, currentPeople, tipAmount);

//     tipTotalPerson.textContent = `$${tipAmount.toFixed(2)}`;
//     totalPerPerson.textContent = `$${totalAmount.toFixed(2)}`;

//     resetBtn.disabled = false;

// }

// const calculateTip = (bill, percent, people)=>{
//     return (bill * (percent/100))/ people;
// }

// const calculateTotalPerPerson = (bill, people, tip) => {
//     return (bill/people) + tip;
// }

// const showError = (field)=>{
//     if (field === 'bill') {
//         billWarning.classList.add('show');
//         billInput.classList.add('error');
//     } else if (field === 'people') {
//         this.peopleWarning.classList.add('show');
//         this.peopleInput.classList.add('error');
//     }
// }

// calculate();

class TipCalculator {
  constructor() {
    this.billInput = document.getElementById("bill");
    this.peopleInput = document.getElementById("people");
    this.customTipInput = document.getElementById("tip-custom");
    this.tipButtons = document.querySelectorAll('input[name="tip-percent"]');
    this.tipAmountOutput = document.getElementById("tip-amount");
    this.totalOutput = document.getElementById("total");
    this.resetBtn = document.getElementById("reset-btn");
    this.billWarning = document.getElementById("bill-warning");
    this.peopleWarning = document.getElementById("people-warning");

    this.currentBill = 0;
    this.currentTipPercent = 0;
    this.currentPeople = 0;

    this.init();
  }

  init() {
    // Event listeners
    this.billInput.addEventListener("input", () => this.handleBillChange());
    this.peopleInput.addEventListener("input", () => this.handlePeopleChange());
    this.customTipInput.addEventListener("input", () =>
      this.handleCustomTipChange()
    );

    this.tipButtons.forEach((button) => {
      if (button.type === "radio") {
        button.addEventListener("change", () =>
          this.handleTipSelection(button)
        );
      }
    });

    this.resetBtn.addEventListener("click", () => this.reset());

    // Initial calculation
    this.calculate();
  }

  handleBillChange() {
    const value = parseFloat(this.billInput.value) || 0;
    this.currentBill = value;

    // Validation
    if (value <= 0 && this.billInput.value !== "") {
      this.showError("bill");
    } else {
      this.hideError("bill");
    }

    this.calculate();
  }

  handlePeopleChange() {
    const value = parseInt(this.peopleInput.value) || 0;
    this.currentPeople = value;

    // Validation
    if (value <= 0 && this.peopleInput.value !== "") {
      this.showError("people");
    } else {
      this.hideError("people");
    }

    this.calculate();
  }

  handleTipSelection(selectedButton) {
    // Remove active class from all tip labels
    document.querySelectorAll(".tip-label").forEach((label) => {
      label.classList.remove("active");
    });

    // Add active class to selected tip
    selectedButton.parentElement.classList.add("active");

    // Clear custom input when radio button is selected
    this.customTipInput.value = "";

    this.currentTipPercent = parseFloat(selectedButton.value);
    this.calculate();
  }

  handleCustomTipChange() {
    const value = parseFloat(this.customTipInput.value) || 0;

    if (value > 0) {
      // Clear radio button selections
      this.tipButtons.forEach((button) => {
        if (button.type === "radio") {
          button.checked = false;
          button.parentElement.classList.remove("active");
        }
      });

      this.currentTipPercent = value;
    } else {
      this.currentTipPercent = 0;
    }

    this.calculate();
  }

  showError(field) {
    if (field === "bill") {
      this.billWarning.classList.add("show");
      this.billInput.classList.add("error");
    } else if (field === "people") {
      this.peopleWarning.classList.add("show");
      this.peopleInput.classList.add("error");
    }
  }

  hideError(field) {
    if (field === "bill") {
      this.billWarning.classList.remove("show");
      this.billInput.classList.remove("error");
    } else if (field === "people") {
      this.peopleWarning.classList.remove("show");
      this.peopleInput.classList.remove("error");
    }
  }

  calculate() {
    if (
      this.currentBill <= 0 ||
      this.currentPeople <= 0 ||
      this.currentTipPercent < 0
    ) {
      this.tipAmountOutput.textContent = "$0.00";
      this.totalOutput.textContent = "$0.00";
      this.resetBtn.disabled = true;
      return;
    }

    const tipAmount =
      (this.currentBill * (this.currentTipPercent / 100)) / this.currentPeople;
    const totalAmount = this.currentBill / this.currentPeople + tipAmount;

    this.tipAmountOutput.textContent = `$${tipAmount.toFixed(2)}`;
    this.totalOutput.textContent = `$${totalAmount.toFixed(2)}`;

    // Enable reset button when there are values to reset
    this.resetBtn.disabled = false;
  }

  reset() {
    // Clear all inputs
    this.billInput.value = "";
    this.peopleInput.value = "";
    this.customTipInput.value = "";

    // Clear radio selections
    this.tipButtons.forEach((button) => {
      if (button.type === "radio") {
        button.checked = false;
        button.parentElement.classList.remove("active");
      }
    });

    // Reset values
    this.currentBill = 0;
    this.currentTipPercent = 0;
    this.currentPeople = 0;

    // Hide errors
    this.hideError("bill");
    this.hideError("people");

    // Reset outputs
    this.tipAmountOutput.textContent = "$0.00";
    this.totalOutput.textContent = "$0.00";

    // Disable reset button
    this.resetBtn.disabled = true;
  }
}

// Initialize the calculator when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new TipCalculator();
});