
function subscribe() {
  const input = document.querySelector('.email-form input');
  if(input.value.trim()) {
    alert(`Thanks for subscribing, ${input.value.trim()}!`);
    input.value = '';
  } else {
    alert('Please enter a valid email.');
  }
}
