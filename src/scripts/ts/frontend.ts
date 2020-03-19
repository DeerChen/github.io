let doc = $('title').text();
$('#container').before(`<h1 id="topic">${doc}</h1>`);
$('h1').before(`
    <nav onclick="backIndex()">
        <span></span>返回首页
    </nav>
`);

const backIndex = function () {
    window.location.href = '../../index.html';
};

let filename = '';
if (doc === 'CSS基础') {
    filename = 'cssBasic';
} else if (doc === 'CSS进阶') {
    filename = 'cssAdvanced';
} else {
    filename = doc.toLowerCase();
}

$.ajax({
    type: 'GET',
    url: `../data/${filename}.json`,
    async: false,
    dataType: 'json',
    success: function (msg: any) {
        const data = msg;
        $('#template').tmpl(data).appendTo('#container');
    },
    error: function () {
        console.log('Error');
    }
});


