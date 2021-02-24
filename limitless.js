// ==UserScript==
// @name         Limitless
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove most web selection limits.
// @author       winterfoxx
// @include     *
// @match      *://*/*

// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

     var style = document.createElement('style');
    style.id = "limitless";
  style.innerHTML = `
    *{
  -webkit-touch-callout: auto !important; /* iOS Safari */
    -webkit-user-select: auto !important; /* Safari */
     -khtml-user-select: auto !important; /* Konqueror HTML */
       -moz-user-select: auto !important; /* Old versions of Firefox */
        -ms-user-select: auto !important; /* Internet Explorer/Edge */
            user-select: auto !important;
            }
  `;
  document.head.appendChild(style);
})();
