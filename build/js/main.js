(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=function(){var i=$(window),t=$("#home"),e=t.find("svg"),n=e.find("polygon");i.on("resize",function(){var t=i.width(),o=i.height();e.attr({width:t,height:o}),n.attr("points","0 0, "+t+" 0, "+t+" "+o)}).trigger("resize")};
},{}],2:[function(require,module,exports){
(function (global){
var home=require("./home");!function(e){global.$document=e(document),$document.ready(function(){"use strict";home()})}(jQuery),function(e,t,n,o,a,c,s){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,c=t.createElement(n),s=t.getElementsByTagName(n)[0],c.async=1,c.src=o,s.parentNode.insertBefore(c,s)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-80851253-1","auto"),ga("send","pageview");
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./home":1}]},{},[2])


//# sourceMappingURL=build/js/main.js.map