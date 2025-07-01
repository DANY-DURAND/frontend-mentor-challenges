const email = document.getElementById('email');
const emailErrorMsg = document.getElementById('email-error');
const form = document.getElementById('form');


const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

const isValidEmail = () => {
const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

emailErrorMsg.classList.add('error-msg');

input.classList.add('error-style');

form.addEventListener('submit',(e)=>{
    
})

function showError() {
    
}