// 'use strict';
// var component = require('./component.js');

// ES6
// import MyModule from './modules/MyModule.js';

// CommonJS
//var MyModule = require('./modules/MyModule.js');

// var app = document.createElement('div');

// document.body.appendChild(app);

// app.appendChild(component());

//document.body.appendChild(component());

import './main.css';

import React from 'react';
import Hello from './component.jsx';

main();

function main() {
    React.render(<Hello />, document.getElementById('app'));
}