'use strict';
var component = require('./component.js');

// ES6
// import MyModule from './modules/MyModule.js';

// CommonJS
var MyModule = require('./modules/MyModule.js');

var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());

//document.body.appendChild(component());