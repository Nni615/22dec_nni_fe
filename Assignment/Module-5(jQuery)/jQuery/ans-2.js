$(document).ready(function(){                   //CSS method
    $('p').css("background-color","purple")
});

$(document).ready(function(){
    $('#add').click(function(){                 //addclass
        $('em').addClass('add_here');
    });
});

$(document).ready(function(){
    $('#add-re').click(function(){              //removeclass
        $('.c').removeClass('em');
    });
});