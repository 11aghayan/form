const formEl = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = true;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

// Style message for en error
function throwError(msg) {
  message.innerHTML = msg;
  message.style.color = '#ff0000';
  messageContainer.style.height = 'auto';
}

// Check if form passes all validatations 

function validateForm() {

  // Check if all fields filed
  inputs.forEach(input => {
    if (input.value.length === 0) {
      isValid = false;
      return;
    }
  })

  if (!isValid) {
    throwError('Please Fill Out All Fields');
    return false;
  }


  // Check if password length is at least 8 characters
  if (password1El.value.length < 8 || password2El.value.length < 8) {
    throwError('Password Should Be Minimum 8 Characters Long');
    password1El.style.borderColor = '#ff0000';
    password2El.style.borderColor = '#ff0000';
    return false;
  }

  // Check if password matches the pattern
  if ( !password1El.value.match(passwordRegex) ) {
    throwError('Password Should Inlcude At Least 1 Uppercase Character, 1 Lowercase Character, 1 Number');
    password1El.style.borderColor = '#ff0000';
    password2El.style.borderColor = '#ff0000';
    return false
  } 

  // Check if passwords match
  if (password1El.value === password2El.value && password1El.value.length) {
    password1El.style.borderColor = '#228b22';
    password2El.style.borderColor = '#228b22';
  } else {
    password1El.style.borderColor = '#ff0000';
    password2El.style.borderColor = '#ff0000';
    throwError('Passwords Need To Match');
    return false;
  }

  message.innerHTML = 'Successfully Registered<br><br>Check Console';
  message.style.color = '#228b22';
  messageContainer.style.height = 'auto';

  return true;

}

function storeFormData() {
  const user = {
    name: formEl.name.value,
    phone: formEl.phone.value,
    email: formEl.email.value,
    website: formEl.website.value,
    password1: formEl.password1.value,
    password2: formEl.password2.value
  }

  // Do Something with data
  console.log(user);
}


function sendForm(e) {
  e.preventDefault();

  if( validateForm() ) {
    storeFormData();
  };
}

// Event Listeners
formEl.addEventListener('submit', sendForm);