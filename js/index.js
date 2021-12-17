$(function() {
    $(".item-button-buy").click(function() {
        addToCart($('.carousel-open:checked').next().attr('id').replace('buy',''));
        alert('Produto adicionado ao carrinho!');
    });

});