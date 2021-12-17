$(function(){
    $("#contactus-button").click(function() {
        if(validateContactusForm())
        {
            alert('Mensagem Enviada!');
            $('#contactus-form')[0].reset();
        }
    });
});

function validateContactusForm()
{
    $form = $('#contactus-form');
    var name = $form.find('#name').val();
    var email =  $form.find('#email').val();
    var message = $form.find('#message').val();
    var topic = $form.find('#topic').val();
    
    if (name == null || name == '')
    {
        alert('Nome não pode estar vazio');
        return false;
    }
    
    if (email == null || email == '')
    {
        alert('Email não pode estar vazio');
        return false;
    }

    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validEmailRegex))
    {
        alert('Formato de Email Inválido.');
        return;
    }
    
    if (message == null || message == '')
    {
        alert('Mensagem não pode estar vazio');
        return false;
    }

    if (topic == null || topic == '')
    {
        alert('Assunto não pode estar vazio');
        return false;
    }
    return true;


}