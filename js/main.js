import {
    checkLength,
    checkLowercase,
    checkNumbers,
    checkRepeatedCharacters,
    checkSpecialCharacters,
    checkUppercase
} from "./helper";

const strengthMeter = document.getElementById('strength-meter');
const passwordInput = document.getElementById('password-input');
const reasonsContainer = document.getElementById('reasons');

passwordInput.addEventListener('input', updateStrengthMeter);
// updateStrengthMeter()

function updateStrengthMeter() {
    let strength = 100
    const password = passwordInput.value

    const weaknesses = calculatePasswordStrength(password)
    reasonsContainer.innerHTML = ''

    weaknesses.forEach(weakness => {
        if (weakness) {
            strength = strength - weakness.deduction

            const messageElement = document.createElement('div')
            messageElement.innerText = weakness.message
            reasonsContainer.appendChild(messageElement)
        }
    })

    strengthMeter.style.setProperty('--strength', strength)
}

function calculatePasswordStrength(password) {
    const weaknesses = []
    weaknesses.push(checkLength(password))
    weaknesses.push(checkUppercase(password))
    weaknesses.push(checkLowercase(password))
    weaknesses.push(checkNumbers(password))
    weaknesses.push(checkSpecialCharacters(password))
    weaknesses.push(checkRepeatedCharacters(password))

    return weaknesses
}


