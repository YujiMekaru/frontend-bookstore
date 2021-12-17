var total= 0;
var couponApplied = false;

$(function() {


    feedTable();


    couponApplied = false;
    $('#coupon-button').click(function(){
        if (couponApplied)
        {
            alert('Um cupom já foi aplicado');
            return;
        }

        if ($('#coupon-text').val() == "UTFPR")
        {
            couponApplied = true;
            total *= 0.85;
            $('#total-value').html(priceToCurrencyFormat(total));
            $('#coupon-message').html('Cupom Aplicado com Sucesso!').removeClass('is-hidden');
            
            return;
        }
        else
        {
            $('#coupon-message').html('Cupom Inválido.').removeClass('is-hidden');
            return;
        }
    });


    $('#purchase-button').click(function(){
        if (!isLogged())
        {
            alert('É necessário estar logado para finalizar a compra.');
            return;
        }

        alert('Seu pedido de compra foi gerado com sucesso!');
        clearCart();
        location.reload();

    });

});

function feedTable()
{
    var cart = JSON.parse(sessionStorage.getItem('cart'));
    if (!cart)
    {
        $('.cart').addClass('is-hidden');
        $('.container').append('<p>Carrinho Vazio!</p>');
        return;
    }

    $('tbody').empty();
    total=0;
    for (let i = 0; i < cart.length; i++) {
        var book = JSON.parse(localStorage.getItem(cart[i].id));
        total += book.Amount * cart[i].qtd;
        $('tbody').append('<tr><td class="remove-container"><input type="button" class="qtd remove" value="x"></td><td>'+book.Name+'</td><td><input type="button" class="qtd minus" value="-"><input class="qtd text"type="text" readonly value="'+cart[i].qtd+'"><input type="button" class="qtd plus" value="+"></td><td>'+priceToCurrencyFormat(book.Amount * cart[i].qtd)+'</td></tr>');
        $('.qtd.minus:last').click(function(){
            removeFromCart(cart[i].id);
            feedTable(cart);
        });
        $('.qtd.plus:last').click(function(){
            addToCart(cart[i].id);
            feedTable(cart);
        });
        $('.qtd.remove:last').click(function(){
            deleteFromCart(cart[i].id);
            feedTable(cart);
        });
    }
    $('tbody').append('<tr><td colspan="3" class="subtotal"><br>Sub-Total : </td><td><br>'+priceToCurrencyFormat(total)+'</td></tr>')
    if (couponApplied)
        total *= 0.85;
    $('#total-value').html(priceToCurrencyFormat(total));
}