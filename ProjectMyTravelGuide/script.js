var destindasi = [{

        "id": 1,
        "kota": "raja ampat",
        "judul": "Misool Island",
        "lokasi": "Raja Ampat, West Papua, Indonesia.",
        "deskripsi": "Misool Island is a remote tropical hideaway, one of four largest islands in the Raja Ampat archipelago, world renowned dive destination in the province of West Papua.",
        "biaya": 3000000
    },
    {
        "id": 2,
        "kota": "jawa timur",
        "judul": "Mount Bromo",
        "lokasi": "Mount Bromo, East Java, Indonesia.",
        "deskripsi": "Mount Bromo is a part of the Bromo Tengger Semeru National Park that covers a massive area of 800 square km. While it may be small when measured against other volcanoes in Indonesia.",
        "biaya": 2000000

    },
    {
        "id": 3,
        "kota": "bali",
        "judul": "Nusa Penida Island",
        "lokasi": "Nusa Penida Island, Bali, Indonesia",
        "deskripsi": "Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali. Nusa Lembongan and Nusa Ceningan make up the trio of islands, each with uniquely breath-taking landscapes. There are so many awesome things to do on Nusa Penida Island.",
        "biaya": 3500000
    }
]










var harga = document.querySelectorAll('#hargaA');
var total = document.querySelector('#total');

$(harga).click(function() {
    if ($('#total').attr('value') == undefined) $('#total').attr('value', 0);
    let price = parseFloat($('#hargaA').attr('value')) + parseFloat($('#total').attr('value'));
    $('#total').attr('value', price);
});

var hargaB = document.querySelectorAll('#hargaB');
var total = document.querySelector('#total');

$(hargaB).click(function() {
    if ($('#total').attr('value') == undefined) $('#total').attr('value', 0);
    let price = parseFloat($('#hargaB').attr('value')) + parseFloat($('#total').attr('value'));
    $('#total').attr('value', price);
});

var hargaC = document.querySelectorAll('#hargaC');
var total = document.querySelector('#total');

$(hargaC).click(function() {
    if ($('#total').attr('value') == undefined) $('#total').attr('value', 0);
    let price = parseFloat($('#hargaC').attr('value')) + parseFloat($('#total').attr('value'));
    $('#total').attr('value', price);
});