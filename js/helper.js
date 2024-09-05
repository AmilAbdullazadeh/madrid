// Helper function for validation
export function validateInput(input, minLength, errorMsg, regex = null) {
    const value = input.trim();
    if (!value || value.length < minLength || (regex && !regex.test(value))) {
        alert(errorMsg);
        return false;
    }
    return true;
}
// check password length
export function checkLength(password) {
    const length = password.length;

    if (length <= 5) {
        return { message: 'Sifreniz cox qisadir', deduction: 40 };
    } else if (length <= 10) {
        return { message: 'Sifreniz daha uzun ola biler', deduction: 15 };
    }
}

// check uppercase letters
export function checkUppercase(password) {
    return checkCharacterType(password, /[A-Z]/g, 'uppercase letters');
}

// check lowercase letters
export function checkLowercase(password) {
    return checkCharacterType(password, /[a-z]/g, 'lowercase letters');
}

// check numbers
export function checkNumbers(password) {
    return checkCharacterType(password, /[0-9]/g, 'numbers');
}

// check special characters
export function checkSpecialCharacters(password) {
    return checkCharacterType(password, /[^A-Za-z0-9]/g, 'special characters');
}

// check character type
export function checkCharacterType(password, regex, type) {
    const matches = (password.match(regex) || []).length;

    if (matches === 0) {
        return { message: `Sifrenizde ${type} yoxdur`, deduction: 20 };
    } else if (matches <= 2) {
        return { message: `Sifrenizde daha cox ${type} istifade ede bilersiniz`, deduction: 5 };
    }
}

// check repeated characters
export function checkRepeatedCharacters(password) {
    const matches = (password.match(/(.)\1/g) || []).length;

    if (matches > 0) {
        return { message: 'Sifrenizde tekrarlanan simvollar var', deduction: matches * 10 };
    }
}
