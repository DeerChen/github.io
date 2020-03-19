"use strict";
var doc = $('title').text();
$('#tb').before("<h1>" + doc + "</h1>");
$('h1').before("\n    <nav onclick=\"backIndex()\">\n        <span></span>\u8FD4\u56DE\u9996\u9875\n    </nav>\n");
var backIndex = function() {
    window.location.href = '../../index.html';
};
var filename = doc.toLowerCase();
$.ajax({
    type: 'GET',
    url: "../data/" + filename + ".json",
    async: false,
    dataType: 'json',
    success: function(msg) {
        var data = msg;
        $('#tbTemplate').tmpl(data.tb).appendTo('#tb');
        for (var _i = 0, _a = data.tb; _i < _a.length; _i++) {
            var obj = _a[_i];
            var title = data[obj.flag];
            var flag = "#" + obj.flag;
            $('#tdTemplate').tmpl(title).appendTo(flag);
        }
    },
    error: function() {
        console.log('Error');
    }
});