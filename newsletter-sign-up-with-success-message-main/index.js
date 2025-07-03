const emailInput = document.getElementById('email');
// const emailInputStyle = document.querySelector('.email-input')
const emailErrorMsg = document.getElementById('email-error');
const form = document.getElementById('form');

const subscribedEmail = document.querySelector('.subscribed-email');
const container = document.querySelector('article.container');
const success = document.querySelector('section.success');

const dismiss = document.querySelector('.btn-dismiss');

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
        // console.log('Invalid email!')
    } else {
        // console.log("You are successfully registered!");
        // Optionally, submit the form or show a success message
        container.classList.add('hidden');
        success.classList.remove('hidden');
        subscribedEmail.innerText = email;
    }
    
}

function returnToPage() {
  success.classList.add('hidden');
  subscribedEmail.innerText= 'ash@loremcompany.com';
  container.classList.remove('hidden');
  emailInput.value ='';
  emailInput.classList.remove('error.style');
  emailInput.classList.add('email-input')
}


form.addEventListener('submit', handleSubmit);

dismiss.addEventListener('click', returnToPage)
