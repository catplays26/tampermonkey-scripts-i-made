// ==UserScript==
// @name         GoComic Scraper for Garfield
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Scrape GoComic.
// @author       winterfoxx
// @include     https://www.gocomics.com/*
// @match      https://www.gocomics.com/*

// @run-at document-start
// ==/UserScript==

(
    async function() {
    'use strict';


setTimeout(() => {
    window.location.assign('https://www.gocomics.com/random/garfield');
var toremove = document.getElementsByClassName("img-fluid lazyautosizes lazyloaded");
    toremove[0].remove();
   var htmlElements = document.getElementsByClassName("img-fluid lazyloaded");
console.log(htmlElements.length);
    var img = htmlElements[0];
    console.log(img.src);
   window.open(img.src, '_blank');



}, 5000);



})();
