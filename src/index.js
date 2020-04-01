import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/badge'
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const name = 'Santiago';
// const jsx = <h1>Hello, Platzi Badges!</h1>;// Esto es JSX
// const elemento = React.createElement('h1',{},`HOLA, Soy ${name}`);// Esto es React
// const elemento = <h1>Hola, Soy {name}</h1>
// const elemento = (
// <div>
// <h1>Hola, Soy {name}</h1>
// <p>Soy Desarrollador Frontend</p>
// </div>
// );
const container = document.getElementById('app');

ReactDOM.render(<Badge 
    firstName='Santiago' 
    lastName='Ramos Morales'
    profesion='Desarrollador Frontend'
    twitter='santiagoramossr'
    avatarUrl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        />,container);