# Face Streaming

## Status: em desenvolvimento 

Face Streaming é um aplicativo desktop com foco no dia a dia de youtubers e streamers. 
Sua utilização pode ser atribuída durante suas apresentações ou lives. Sua proposta é 
ter uma acessibilidade intuitiva e prática para o usuário, facilitando a configuração do 
aplicativo em sua tela. Com ele, você terá a possibilidade de alterar a posição em que o 
Face Streaming irá aparecer durante a sua apresentação e também configurar a aparência do 
layout e a qualidade de vídeo.

<br>

---
###  Video de apresentação aqui
---

<br>

### Para desenvolver a estrutura base de Face Streaming
tecnologias utilizadas:

        Electron.js / Electron Forge
        React.js
        TypeScript
        Styled-components

    Nota: Tenho a intenção de criar novas funcionalidades e componentes para o Face Streaming. 
    A escolha das tecnologias utilizadas pode ser alterada ao longo do projeto, atendendo às 
    necessidades das funcionalidades desenvolvidas.

<br>

---

### Electron.js / Electron Forge

Crie um novo aplicativo Electron com webpack e TypeScript.

    npm init electron-app@latest my-new-app -- --template=webpack-typescript

Em caso de duvidas siga a documentação oficial de => [Electron.js](https://www.electronforge.io/templates/typescript-+-webpack-template)

<br>

---
### React.js com TypeScript

Adicione os pacotes básicos do React às suas dependências e os tipos correspondentes às suas devDependencies:

    npm install --save react react-dom
    npm install --save-dev @types/react @types/react-dom


<br>


---
Edite o tsconfig.json recém-criado para adicionar a entrada de valor-chave "jsx": "react-jsx" à seção "compilerOptions".

    {
    "compilerOptions": {
        "target": "ES6",
        "allowJs": true,
        "module": "commonjs",
        "skipLibCheck": true,
        "esModuleInterop": true,
        "noImplicitAny": true,
        "sourceMap": true,
        "baseUrl": ".",
        "outDir": "dist",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "paths": {
        "*": ["node_modules/*"]
        },
        "jsx":"react-jsx"
    },
    "include": ["src/**/*"]
    }

<br>

---

. arquivo index.html

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8" />
        <title>Face Streaming</title>

    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>

<br>

---

. arquivo render.tsx

    import React from "react";
    import * as ReactDOM from "react-dom";
    import App from "./App/app";

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    document.getElementById("root")
    );

<br>

---

. arquivo app.tsx

    function App() {
    return (
        <>
            <h1>Hello World</h1>
        </>
    );
    }

    export default App;

<br>

---

### React Webcam

Para Face Streaming utilize React Webcam

    # with npm
    npm install react-webcam

    # with yarn
    yarn add react-webcam

React Webcam é opcional, caso decida utilizalo é importante conferir a documentação onde ira encontrar todas as informações necessarias para utilizar em seu projeto.

[React-Webcam](https://www.npmjs.com/package/react-webcam)
