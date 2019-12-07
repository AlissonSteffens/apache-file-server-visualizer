// ==UserScript==
// @name         Apache file visualizer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       AlissonSteffens e RafaelfCosta
// @match        http://*/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var list = $("a");
    $('head').append('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">')
    $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/css/lightbox.min.css">')
    $('head').append('<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/js/lightbox.min.js" integrity="sha256-CtKylYan+AJuoH8jrMht1+1PMhMqrKnB8K5g012WN5I=" crossorigin="anonymous"></script>')

    $('body').append('<div class=""><div class="row" id="list"></div></div>')
    for(var i = 0; i < list.length; i++){
        var link = list[i].getAttribute("href")
        if(link.includes('png') || link.includes('jpg') || link.includes('gif') || link.includes('jpeg') || link.includes('bmp') || link.includes('svg')){
           $('div#list').append('<div class="card col-md-2" style="margin-bottom: 10px;"><a href="'+link+'" data-lightbox="imgs"><img class="card-img-top" src="'+link+'"><div class="card-body"><p>'+link+'</p></div></a></div>')
        }

        if(link.includes('mp4')){
           $('div#list').append('<div class="card col-md-2" style="margin-bottom: 10px;"><video controls><source src="'+link+'" type="video/mp4"></video><div class="card-body"><p>'+link+'</p></div></div>')
        }

        if(link.includes('mp3')){
           $('div#list').append('<div class="card col-md-2" style="margin-bottom: 10px;"><audio controls><source src="'+link+'" type="audio/mp3"></audio><div class="card-body"><p>'+link+'</p></div></div>')
        }
    }
})();
