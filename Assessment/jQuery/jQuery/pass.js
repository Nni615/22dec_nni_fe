$(document).ready(function(){
    $('#password').on('keyup' , function(){
        var number = /([0-9])/;
        var characters = /([a-zA-Z])/;
        var SpecialCharacters = /([~,@,#,$,^,&,*,?,,+,_,=,<,>])/;
        if($('#password').val().length < 6)
        {
            $('#password-strength').removeClass();
            $('#password-strength').addClass('weak-password');
            $('#password-strength').html("Weak(should be atleast 6 characters)");
        }
        else if($('#password').val().match(number) && $('#password').val().match(characters) && $('#password').val().match(SpecialCharacters))
        {
            $('#password-strength').removeClass();
            $('#password-strength').addClass('strong-password');
            $('#password-strength').html("strong");
        }
        else
        {
            $('#password-strength').removeClass();
            $('#password-strength').addClass('medium-password');
            $('#password-strength').html("Medium");
        }
    });
});