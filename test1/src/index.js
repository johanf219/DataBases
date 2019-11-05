/**
* Determine if a number is prime
* @param {Integer} n
* @returns {boolean}
*/
/*
const isPrime = require('is-prime')

function esPrimo(n) {
  if (n > 0){
    for (let i=2; i < Math.sqrt(n); i++) {
      if(n & i === 0){
        console.log(n%i)
        return false;
      }
    }
    return true;
  }
  return false;
}

module.exports = esPrimo;
*/

'use strict';
const express = require('express');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/app', (req, res) => {
  console.log(req);
  res.send('Hello hemocho\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);