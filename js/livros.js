$(function() {
    createItemCards();
    $(".selectFilter").on('change',function() {
        createItemCards(this.value);
    });

    $('.modal-bg').on('click', function(event){
        if (event.target == $(this).get(0))
            $('.modal-bg').addClass('is-hidden');
    });

    $('.item-button-buy').click(function(){
        addToCart($('#book-id').html());
        alert('Produto adicionado ao carrinho!');
    });
});

function createItemCards(filter)
{
    $('.cards_wrap').empty();
    $wrapper = $('.cards_wrap');
    var books = [];
    for (let i = 1; i <= localStorage.getItem('idCount'); i++) 
    {
        books.push(JSON.parse(localStorage.getItem(i)));
    }
    if (filter == "ascendingValue")
        books.sort(compareValue);
    else if (filter == "name")
        books.sort(compareName);
    switch(filter)
    {
        case 'ascendingValue':
            books.sort(compareValue);
            break;
        case 'descendingValue':
            books.sort(compareValue);
            books.reverse();
            break;
        case 'ascendingName':
            books.sort(compareName);
            break;
        case 'descendingName':
            books.sort(compareName);
            books.reverse();
            break;              
    }
    books.forEach(function (item){
        $wrapper.append(newCard(item.Img, item.Name, item.Amount));
        $('.card_item:last').on('click', function (){
            createBookModal(item);
        });
    });
}

function createBookModal(item)
{
    $modal = $('.modal-bg');
    $modal.removeClass('is-hidden');
    $modal.find('img').attr('src',item.Img);
    $modal.find('#book-id').html(item.Id);
    $modal.find('#book-name').html(item.Name);
    $modal.find('#author-name').html(item.Author);
    $modal.find('#publisher-name').html(item.Publisher);
    $modal.find('#amount').html(priceToCurrencyFormat(item.Amount));  
}

function compareName(a,b)
{
    if (a.Name < b.Name)
        return -1;
    if (a.Name > b.Name)
        return 1;
    return 0;
}

function compareValue(a,b)
{
    if (a.Amount < b.Amount)
        return -1;
    if (a.Amount > b.Amount)
        return 1;
    return 0;
}


function newCard(imgpath, bookname, bookprice)
{
    var str = cardTemplate;
    str = str.replace('IMGPATH', imgpath);
    str = str.replace('BOOKNAME',bookname);
    str = str.replace('BOOKPRICE',priceToCurrencyFormat(bookprice));
    return str;
}




var cardTemplate = '\
                    <div class="card_item">\n\
                        <div class="card_inner">\n\
                            <img src="IMGPATH">\n\
                            <p>BOOKNAME<br>BOOKPRICE</p>\n\
                        </div>\n\
                    </div>';