
# Gerador de Senhas com TypeScript 🔐✨

Este é um projeto de **Gerador de Senhas** desenvolvido em **TypeScript**, que permite criar senhas seguras e personalizáveis. Com este aplicativo, você pode definir o comprimento da senha e escolher se deseja incluir números, símbolos e letras maiúsculas/minúsculas. 

## Funcionalidades 🚀

- Criação de senhas aleatórias personalizadas.
- Opções de configuração:
  - Tamanho da senha
  - Inclusão de números
  - Inclusão de símbolos
  - Inclusão de letras maiúsculas
  - Inclusão de letras minúsculas

## Tecnologias Utilizadas 🛠️

- [TypeScript](https://www.typescriptlang.org/) - Uma linguagem de programação que é um superconjunto do JavaScript.
- Node.js - Para a execução do projeto.

## Estrutura do Projeto 📁

```
password-generator/
│
├── src/
│   ├── types/
│   │   └── options.ts
│   ├── utils/
│   │   └── generatePassword.ts
│   ├── index.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

## Instalação 💻

Siga os passos abaixo para configurar o projeto em sua máquina:

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** instalados. Você pode baixar o Node.js [aqui](https://nodejs.org/).

### Passo a Passo

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/thaleson/password_generatortypescript.git
   cd password-generador
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Compile o TypeScript**:

   ```bash
   npx tsc
   ```

4. **Execute o gerador de senhas**:

   ```bash
   npm start
   ```

## Como Usar 💡

Após a execução, você verá a senha gerada no console! 

Você pode personalizar as opções de senha diretamente no arquivo `src/index.ts` alterando o objeto `options`:

```typescript
const options: PasswordOptions = {
    length: 12,               // Defina o comprimento desejado
    includeNumbers: true,     // Inclui números?
    includeSymbols: true,     // Inclui símbolos?
    includeUppercase: true,   // Inclui letras maiúsculas?
    includeLowercase: true,   // Inclui letras minúsculas?
};
```

## Executando no Windows, Mac e Linux 🌍

### Windows 🖥️
- Siga os passos de instalação acima no **Prompt de Comando** ou **PowerShell**.

### Mac 🖥️
- Utilize o **Terminal** e siga os passos de instalação.

### Linux 🐧
- Use o **Terminal** e siga os passos de instalação.

## Contribuições 🤝

Sinta-se à vontade para abrir **issues** ou **pull requests** para melhorias no projeto!

## Licença 📜

Este projeto está licenciado sob a MIT License. Veja o arquivo `LICENSE` para mais detalhes.

---



