// src/utils/generatePassword.ts

import { PasswordOptions } from "../types/options";

const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:',.<>?";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function generatePassword(options: PasswordOptions): string {
    let characters = "";
    if (options.includeNumbers) characters += numbers;
    if (options.includeSymbols) characters += symbols;
    if (options.includeLowercase) characters += lowercaseLetters;
    if (options.includeUppercase) characters += uppercaseLetters;

    let password = "";
    for (let i = 0; i < options.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}
