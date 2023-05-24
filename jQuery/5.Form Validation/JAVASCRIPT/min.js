$(document).ready(function(){

    $("#frm").validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10,
                number: true
            }
        },
        message: {
            name:{
                required: "Enter your name first",
                minlength: "Name must in capital form and atleast 4 characters long."
            },
            email: {
                required: "Enter your email first",
                email: "Enter an valid email address."
            },
            phone: {
                number: "Only digits are allowed"
            }
        },
        submitHandler: function(frm){
            frm.submit();
        }
    });
});