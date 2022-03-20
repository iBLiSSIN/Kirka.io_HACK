// ==UserScript==
// @name         Kirka Hack v2
// @version      2.1
// @description  FEATURES: AimBot with ON/OFF key is X; Wallhack with ON/OFF key is C
// @author       infi
// @match        *://kirka.io/*
// @icon         https://www.google.com/s2/favicons?domain=kirka.io
// @connect      raw.githubusercontent.com
// @connect      githubusercontent.com
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @noframes
// @namespace https://github.com/iBLiSSIN/Kirka.io_HACK
// ==/UserScript==

document.addEventListener("DOMContentLoaded", () => {
    GM_xmlhttpRequest({
        url: 'https://raw.githubusercontent.com/iBLiSSIN/Kirka.io_HACK/main/kirka_hacksV2.js',
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
