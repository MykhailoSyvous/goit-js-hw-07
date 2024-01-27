const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
  const inputValue = this.value.trim();

  if (inputValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputValue;
  }
});