$(document).ready(function(){

    $("#frm").validate({

        rules: {
            fullname:{
                required: true,
                minlength: 4
            },
            email:{
                required: true,
                email: true
            },
            pwd:{
                required: true,
                minlength: 6
            },
            cfpwd:{
                required: true,
                minlength: 6,
                equalTo: "#pasword"
            }
        },
        messages: {
            fullname:{
                required: "Please enter first field",
                minlength: "atleast 4 characters"
            },
            email:{
                required: "Please enter  email",
                email: "enter valid emailid"
            },
            pwd:{
                required:"Please enter password",
                minlength:"minimum 6 numbers"
            },
            cfpwd:{
                required: "Please enter password",
                equalTo: "Enter the above mention password",
                minlength: "minimum 6 numbers"
            },
        },
        submitHandler: function(frm){
            frm.submit();
        }

    });


});