function addToCart(id)
{
    var cart = JSON.parse(sessionStorage.getItem('cart'));
    if (!cart)
        cart = [];

    var flag = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id)
        {
            cart[i].qtd++;
            flag = true;
            break;
        }
    }
    if (!flag)
        cart.push({"id":id,"qtd":1});

    sessionStorage.setItem('cart',JSON.stringify(cart));
}

function removeFromCart(id)
{
    var cart = JSON.parse(sessionStorage.getItem('cart'));
    if (!cart)
        return;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id)
        {
            if (cart[i].qtd == 1)
                return;

            cart[i].qtd--;
            break;
        }
    }

    sessionStorage.setItem('cart',JSON.stringify(cart));
}

function deleteFromCart(id)
{
    var cart = JSON.parse(sessionStorage.getItem('cart'));
    if (!cart)
        return;

    if (cart.length == 1)
    {
        if (cart[0].id == id) 
            clearCart();
        return;
    }

    var newCart = [];
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id)
            continue;
        newCart.push(cart[i]);    
    }

    sessionStorage.setItem('cart',JSON.stringify(newCart));
}

function clearCart()
{
    sessionStorage.removeItem('cart');
}