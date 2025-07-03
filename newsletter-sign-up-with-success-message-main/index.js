const emailInput = document.getElementById('email');
// const emailInputStyle = document.querySelector('.email-input')
const emailErrorMsg = document.getElementById('email-error');
const form = document.getElementById('form');


const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
  return emailRegExp.test(email);
}

function handleSubmit(e){
    e.preventDefault();
    const formEntry = new FormData(e.target).entries();
    const {email} = Object.fromEntries(formEntry);

    // Reset error state
    emailErrorMsg.innerText = '';
    emailInput.classList.remove('error-style');
    emailInput.classList.add('email-input');

    if (!validateEmail(email)) {
        emailErrorMsg.innerText = 'Valid Email required';
        emailInput.classList.remove('email-input');
        emailInput.classList.add('error-style');
        console.log('Invalid email!')
    } else {
        console.log("You are successfully registered!");
        // Optionally, submit the form or show a success message
    }
    
}


form.addEventListener('submit', handleSubmit)