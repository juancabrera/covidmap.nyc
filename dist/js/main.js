(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.siteLoader = siteLoader;
// site loader

function siteLoader() {
  this.init = function () {
    var b = document.querySelector("body");

    window.setTimeout(function () {
      b.className += " l";
    }, 200);
  };
}

},{}],2:[function(require,module,exports){
'use strict';

var _loader = require('./loader');

var sl = new _loader.siteLoader();

document.addEventListener("DOMContentLoaded", function () {
  sl.init();
  document.querySelector('a.play').addEventListener("click", function (e) {
    document.querySelector('video.video').play();
    document.querySelector('a.play').remove();
    e.preventDefault();
  });
}, false);

},{"./loader":1}]},{},[2]);
