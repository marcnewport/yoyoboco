// var utils = require('./utils');
var home = require('./home');

// utils();

(function($) {

  global.$document = $(document);

  $document.ready(function() {

    'use strict';

    home();

  });

  // global.svgElement = function(tagName) {
  //   return document.createElementNS('http://www.w3.org/2000/svg', tagName);
  // }

})(jQuery);

// Analytics code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-80851253-1', 'auto');
ga('send', 'pageview');
