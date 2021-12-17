$(function() {
    $("#signup-button").click(function() {
        var newUser = validateSignupForm();
        if (!newUser)
            return;
        
        if (signup(newUser.email, newUser)) 
        {
            alert('Usuário Cadastrado com Sucesso!');
            $('#signup-form')[0].reset();
            $('#street').removeAttr('disabled');
            $('#district').removeAttr('disabled');
            $('#city').removeAttr('disabled');
            $('#uf').removeAttr('disabled');
        }
        else
        {
            alert('Email já possui cadastro');
        }
    });

    $("#cep").on('change',function(){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://viacep.com.br/ws/'+$("#cep").val()+'/json');

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4)
                if (xhr.status == 200)
                {
                    var data = JSON.parse(xhr.responseText);
                    if (!data.erro)
                    {
                        $('#street').val(data.logradouro).attr('disabled','disabled');
                        $('#district').val(data.bairro).attr('disabled','disabled');
                        $('#city').val(data.localidade).attr('disabled','disabled');
                        $('#uf').val(data.uf).attr('disabled','disabled');  
                    }
                    else
                    {
                        $('#street').removeAttr('disabled');
                        $('#district').removeAttr('disabled');
                        $('#city').removeAttr('disabled');
                        $('#uf').removeAttr('disabled');
                    }
                }

        }
        xhr.send();
    });
});

function validateSignupForm()
{
    $form = $('#signup-form');
    var newUser = {};
    newUser.name = $form.find('#name').val();
    newUser.cpf = $form.find('#cpf').val();
    newUser.email = $form.find('#email').val();
    newUser.birthdate = $form.find('#birthdate').val();
    newUser.password = $form.find('#password').val(); 
    newUser.cep = $form.find('#cep').val();
    newUser.street = $form.find('#street').val();
    newUser.number = $form.find('#number').val();
    newUser.district = $form.find('#district').val();
    newUser.city = $form.find('#city').val();
    newUser.uf = $form.find('#uf').val();  

    var flag = false;
    Object.keys(newUser).forEach(function(key) {
        if (newUser[key] == null || newUser[key] == '')
            flag= true;
    });

    if (flag)
    {
        alert('Todos os campos devem ser preenchidos.');
        return null;
    }
    var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!newUser.email.match(validEmailRegex))
    {
        alert('Formato de Email Inválido.');
        return null;
    }

    if (isNaN(newUser.cpf))
    {
        alert('CPF deve ser apenas dígitos (sem pontos e aspas)');
        return null;
    }
    if (!validaCPF(newUser.cpf))
    {
        alert('CPF Inválido');
        return null;
    }
    if (!isValidDate(newUser.birthdate))
    {
        alert('Data de Nascimento Inválida');
        return null;
    }
    var aux = newUser.birthdate.split("/");
    var birthdateTimeStamp = new Date(aux[2], aux[1]-1, aux[0]);
    if (calculateAge(birthdateTimeStamp)<18)
    {
        alert('Cadastro permitido apenas para usuários acima de 18 anos.');
        return null;
    }
    if (newUser.password.length < 8 )
    {
        alert('Senha deve possuir 8 dígitos');
        return null;
    }
    return newUser;

}

function calculateAge(birthday) { 
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function isValidDate(dateString)
{
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    var parts = dateString.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if(year < 1800 || year > 2021 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    return day > 0 && day <= monthLength[month - 1];
};

function validaCPF(cpf) {

    var Soma = 0
    var Resto
   strCPF = cpf;
    if (strCPF.length !== 11)
       return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return false
  
    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return false
  
    Soma = 0
  
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return false
  
    return true
  }
