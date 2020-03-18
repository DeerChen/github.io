let doc = $('title').text();
$('#tb').before(`<h1>${doc}</h1>`);
$('h1').before(`
    <nav onclick="backIndex()">
        <span></span>返回首页
    </nav>
`);

const backIndex = function () {
    window.location.href = '../../index.html';
};

const filename = doc.toLowerCase();

$.ajax({
    type: 'GET',
    url: `../data/${filename}.json`,
    async: false,
    dataType: 'json',
    success: function (msg: any) {
        const data = msg;
        $('#tbTemplate').tmpl(data.tb).appendTo('#tb');

        for (let obj of data.tb) {
            let title = data[obj.flag];
            let flag = `#${obj.flag}`;

            $('#tdTemplate').tmpl(title).appendTo(flag);
        }
    },
    error: function () {
        console.log('Error');
    }
});