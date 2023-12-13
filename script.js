let currentValue = 0; // global scope set to LET so we can change its value

document.getElementById('add').addEventListener('click', addValue);       //DOM
document.getElementById('subtract').addEventListener('click', subtractValue);

function determineColor() {
    const valueElement = document.getElementById('value');
    valueElement.style.color = currentValue < 0 ? 'red' : 'black'; // switches between the two colors BASED off if its less then 0
}

function addValue() {
    const inputElement = document.getElementById('adder');
    const inputValue = Number(inputElement.value) || 1; // the one is the placeholder because i dont know how to get it to actually determine the placeholder value
    currentValue += inputValue;
    document.getElementById('value').innerText = currentValue;
    determineColor(); // we're gonna refresh the function every time this function is used.
}

function subtractValue() {
    const inputElement = document.getElementById('adder');
    const inputValue = Number(inputElement.value) || 1;
    currentValue -= inputValue;
    document.getElementById('value').innerText = currentValue;
    determineColor(); // we're gonna refresh the function every time this function is used.
}