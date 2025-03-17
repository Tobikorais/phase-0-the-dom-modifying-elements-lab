// Remove the <main> element with id 'main'
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element and assign it to the 'newHeader' variable
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.textContent = 'YOUR-NAME is the champion';

// Append the new <h1> element to the body or another container if needed
document.body.appendChild(newHeader);