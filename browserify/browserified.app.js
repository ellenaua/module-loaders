(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var module1 = require('./module1');
var module2 = require('./module2');

var div1 = document.createElement('div');
div1.innerHTML = module1.getHtml();
document.body.appendChild(div1);

var div2 = document.createElement('div');
div2.innerHTML = module2.getHtml();
document.body.appendChild(div2);

},{"./module1":3,"./module2":4}],2:[function(require,module,exports){
exports.getRandomNumber = function(){
  return Math.round(Math.random() * 100);
}

},{}],3:[function(require,module,exports){
var lib = require('./lib');

exports.getHtml = function(){
  return `Module 1 says: ` + lib.getRandomNumber();
}

},{"./lib":2}],4:[function(require,module,exports){
var lib = require('./lib');

exports.getHtml = function(){
  return `Module 2 says: ` + lib.getRandomNumber();
}

},{"./lib":2}]},{},[1]);
