$(function() {
    $("#login-button").click(function() {
       if (signin($('#email').val(),$('#password').val()))
       {
           alert('Login realizado com sucesso!');
           location.reload();
       }
       else
       {
           alert('Usuário ou Senha incorretos.');
       }

    });

    if(sessionStorage.getItem('user'))
    {
        var email = sessionStorage.getItem('user');
        var user = JSON.parse(localStorage.getItem(email));
        var name = user.name;
        $("#login-form").addClass('is-hidden');
        $(".form-container").append('<div style="margin: 10px;"><p>Você está logado como '+name+'.</p><input onclick="logout()" type="button" value="Sair"></div><br>');


    }
});

function logout()
{
    sessionStorage.removeItem('user');
    location.reload();
}