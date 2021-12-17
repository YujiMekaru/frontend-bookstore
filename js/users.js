function signup(email, obj)
{
    if (localStorage.getItem(email.toLowerCase()))
        return false;
    localStorage.setItem(email.toLowerCase(), JSON.stringify(obj));
    return true;
}

function signin(email, pass)
{
    email = email.toLowerCase();
    if (!email || !pass || email=='' || pass=='')
        return false;
    if (!localStorage.getItem(email))
        return false;

    if (JSON.parse(localStorage.getItem(email)).password == pass)
    {
        sessionStorage.setItem('user',email);
        return true; 
    }
    return false;
}

function isLogged()
{
    if (!sessionStorage.getItem('user'))
        return false;
    return true;
}

