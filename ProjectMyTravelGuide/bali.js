var hargaC = document.querySelectorAll('#hargaC');
var total = document.querySelector('#total');

$(hargaC).click(function() {
    if ($('#total').attr('value') == undefined) $('#total').attr('value', 0);
    var price = parseFloat($('#hargaC').attr('value')) + parseFloat($('#total').attr('value'));
    $('#total').attr('value', price);
});