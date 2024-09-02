// 5. Create Buttons from an Array and Alert their Values
const buttonNames = ['Button 1', 'Button 2', 'Button 3'];
const buttonContainer = document.querySelector('#button-container');

buttonNames.forEach((buttonName) => {
    debugger
    const buttonElement = document.createElement('button');
    buttonElement.textContent = buttonName;
    buttonElement.addEventListener('click', () => {
        alert(buttonName);
    });
    buttonContainer.appendChild(buttonElement);
});
