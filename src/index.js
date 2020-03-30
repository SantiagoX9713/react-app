import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Santiago';
// const jsx = <h1>Hello, Platzi Badges!</h1>;// Esto es JSX
// const elemento = React.createElement('h1',{},`HOLA, Soy ${name}`);// Esto es React
// const elemento = <h1>Hola, Soy {name}</h1>
const elemento = (
<div>
<h1>Hola, Soy {name}</h1>
<p>Soy Desarrollador Frontend</p>
</div>
);
const container = document.getElementById('app');

ReactDOM.render(elemento,container);