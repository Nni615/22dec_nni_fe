$(document).ready(function(){

    $("#form").validate({
        rules:{

            lnm:{
                required:true,
                minlength:4
            },
            fnm:{
                required:true,
                minlength:4
            },
            enm:{
                required:true,
                email:true
            }

        },
        messages:{
            lnm:{
                required: "Please enter first field",
                minlength: "atleast 4 characters"
            },
            fnm:{
                required: "Please enter first field",
                minlength: "atleast 4 characters"
            }, 
            enm:{
                required: "Please enter  email",
                email: "enter valid emailid"
            },
        },
        submitHandler: function(frm){
            frm.submit();
        }
    });
});












