"use strict";
var doc = $('title').text();
$('#container').before("<h1 id=\"topic\">" + doc + "</h1>");
$('h1').before("\n    <nav onclick=\"backIndex()\">\n        <span></span>\u8FD4\u56DE\u9996\u9875\n    </nav>\n");
var backIndex = function () {
    window.location.href = '../../index.html';
};
var filename = '';
if (doc === 'CSS基础') {
    filename = 'cssBasic';
}
else if (doc === 'CSS进阶') {
    filename = 'cssAdvanced';
}
else {
    filename = doc.toLowerCase();
}
$.ajax({
    type: 'GET',
    url: "../data/" + filename + ".json",
    async: false,
    dataType: 'json',
    success: function (msg) {
        var data = msg;
        $('#template').tmpl(data).appendTo('#container');
    },
    error: function () {
        console.log('Error');
    }
});
