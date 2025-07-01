const emailInput = document.getElementById('email');
// const emailInputStyle = document.querySelector('.email-input')
const emailErrorMsg = document.getElementById('email-error');
const form = document.getElementById('form');


const emailRegExp = /^\S+@\S+$/g;

function validateEmail(email) {

  if ( !emailRegExp.test(email) && !email) {
    return false;
  }

  return true;
}


function handleSubmit(e){
    e.preventDefault(e);

    const formEntry = new FormData(e.target).entries();
    
    const {email} = Object.fromEntries(formEntry);
    
    if (!validateEmail(email)) {
        emailErrorMsg.innerText = 'Valid Email required'
        emailErrorMsg.classList.add('error-msg');
        emailInput.classList.remove('email-input');
        emailInput.classList.add('error-style');
        console.log('Invalid email!')
    }
    else{
        console.log("You are successfully registered!");
        
    }

    
    
}


form.addEventListener('submit', handleSubmit)