let doc: string = $('title').text();
$('#container').before(`<h1 id="topic">${doc}</h1>`);
if (doc !== 'Index')
    $('h1').before(`
    <nav onclick="backIndex()">
        <span></span>返回首页
    </nav>
`);

const backIndex = function (): void {
    window.location.href = '../../index.html';
};

let filename: string = '';
if (doc === 'CSS基础') {
    filename = 'cssBasic';
} else if (doc === 'CSS进阶') {
    filename = 'cssAdvanced';
} else {
    filename = doc.toLowerCase();
}

let file: string = '';
if (filename === 'index') {
    file = `./src/data/${filename}.json`
} else {
    file = `../data/${filename}.json`
}

$.ajax({
    type: 'GET',
    url: file,
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

const setUrl = function (param: string): void {
    window.location.href = `./src/pages/${param}.html`;
};