function priceToCurrencyFormat(price)
{
    var str = price.toString();
    if (str.indexOf('.') != -1)
    {
        if (str.indexOf('.') == str.length - 2)
            str+='0';
    }
    else
        str +='.00';
    str = str.replace('.',',');
    var currency = 'R$';
    str = currency.concat(' ',str);
    return str;

}
