// src/index.ts

import { generatePassword } from "./src/utils/generatePassword";
import { PasswordOptions } from "./src/types/options";

// Defina as configurações de exemplo
const options: PasswordOptions = {
    length: 12,
    includeNumbers: true,
    includeSymbols: true,
    includeUppercase: true,
    includeLowercase: true,
};


// Gera e exibe a senha
const password = generatePassword(options);
console.log(`Gerador de senhas: ${password}`);
