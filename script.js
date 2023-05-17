let passwordbox = document.querySelector('#password')
let confirmPasswordbox = document.querySelector('#confirmpassword')
let passwordsDontMatchText = document.querySelector('#passwordsdontmatch')

function changed() {
  if (passwordbox.value !== confirmPasswordbox.value) {
    passwordsDontMatchText.style.display = "inline"
    passwordbox.style['border-color'] = "rgb(202, 84, 84)";
    confirmPasswordbox.style['border-color'] = "rgb(202, 84, 84)";
  }else{
    passwordsDontMatchText.style.display = "none"
    passwordbox.style['border-color'] = "rgb(229, 231, 235)";
    confirmPasswordbox.style['border-color'] = "rgb(229, 231, 235)";
  }
}

passwordbox.addEventListener('change', changed)
confirmPasswordbox.addEventListener('change', changed)