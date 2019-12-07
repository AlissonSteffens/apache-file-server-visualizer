// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var list = $("a");
    for(var i = 0; i < list.length; i++){
        var link = list[i].getAttribute("href")
        $('body').append('<p>'+link+'</p>')
        if(link.includes('png') || link.includes('jpg') || link.includes('gif')){
           $('body').append('<img src="'+link+'" style="width: 400px; display: block; margin: 10px">')
        }
        if(link.includes('mp4')){
           $('body').append('<source src="'+link+'" type="video/mp4">')
        }

    }
})();
