$(document).ready(function () {
    $flag = 1;
   

    /****Employee Name Validation ****/
    $("#visitor_name").focusout(function () {
        if ($(this).val() == '') {
            $(this).css("border-color", "rgba(238, 39, 37, 0.5)");
            //$('#submit').attr('disabled', true);
            $("#error_visitor_name").text("Please enter your Name");
        } else {
            $(this).css("border-color", "#666"); 
            $(this).css("background", "rgb(255, 255, 255)");
            $('#submit').attr('disabled', false);           
            $("#error_visitor_name").text("");
        }
    });
    $("#visitor_name").focusin(function (){        
            $(this).css("background", "rgb(255, 255, 255)","color", "#000");
            //$('#submit').attr('disabled', true);
    });


    /****Employee Contact no. Validation ****/
    
    $("#visitor_contact").focusout(function () {
    var mob = /^[1-9]{1}[0-9]{9}$/;

        var currentValue = $("#visitor_contact").val();

        if(mob.test(currentValue) == false && currentValue != 10){
            $(this).css("background", "rgb(255, 255, 255)"); 
            $(this).css("border-color", "rgba(238, 39, 37, 0.5)");   
            $("#error_visitor_contact").text("Please Enter valid Mobile no.");
        } else{
            $(this).css("border-color", "#666");            
            $("#error_visitor_contact").text("");;
        }
        e.preventDefault();
        });

        $("#visitor_contact").focusin(function (){        
            $(this).css("background", "rgb(255, 255, 255)","color", "#000");           
        });




     /****Email Validation ****/
     function validateEmail(sEmail) {
        var filter = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
        if (filter.test(sEmail)) {
            return true;
        } else {
            return false;
        }
    }
    $("#visitor_email").focusout(function () {
        var sEmail = $('#visitor_email').val();
        if ($.trim(sEmail).length == 0) {
            $(this).css("border-color", "rgba(238, 39, 37, 0.5)");
           // $('#submit').attr('disabled', true);
            $("#error_visitor_email").text("Please enter valid Email ID");

            //e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            $(this).css("border-color", "#666");
           $('#submit').attr('disabled', false);
            $("#error_visitor_email").text("");;
        } else {
            $(this).css("border-color", "rgba(238, 39, 37, 0.5)");
           // $('#submit').attr('disabled', true);
            $("#error_visitor_email").text("Invalid Email ID");
            //e.preventDefault();
        }
    });
    $("#visitor_email").focusin(function (){        
        $(this).css("background", "rgb(255, 255, 255)","color", "#000");
       // $('#submit').attr('disabled', true);
    });
    /****Assets Type Validation ****/
    $("#visitor_message").focusout(function () {
        if ($(this).val() == '') {
            $(this).css("border-color", "rgba(238, 39, 37, 0.5)");
           // $('#submit').attr('disabled', true);
            $("#error_visitor_message").text("Please enter your Message");
        } else {
            $(this).css("border-color", "#666");
           $('#submit').attr('disabled', false);
            $("#error_visitor_message").text("");
        }
    });
    $("#visitor_message").focusin(function (){        
        $(this).css("background", "rgb(255, 255, 255)","color", "#000");
     //   $('#submit').attr('disabled', false);
});

    /***+Submit Validation ****/
    $("#submit").click(function () {       
        if ($("#visitor_name").val() == '') {
            $("#visitor_name").css("border-color", "rgba(238, 39, 37, 0.5)");
            $('#submit').attr('disabled', true);
            $("#error_visitor_name").text("Please enter your Name");
        }
        if ($("#visitor_contact").val() == '') {
            $("#visitor_contact").css("border-color", "rgba(238, 39, 37, 0.5)");
            $('#submit').attr('disabled', true);
            $("#error_visitor_contact").text("Please enter your Mobile No.");
        }
        if ($("#visitor_email").val() == '') {
            $("#visitor_email").css("border-color", "rgba(238, 39, 37, 0.5)");
            $('#submit').attr('disabled', true);
            $("#error_visitor_email").text("Please enter your Email ID");
        }
        if ($("#visitor_message").val() == ''){
            $("#visitor_message").css("border-color", "rgba(238, 39, 37, 0.5)");
            $('#submit').attr('disabled', true);
            $("#error_visitor_message").text("Please enter your Message");
        }
        // else{
        //     $('#submit').attr('disabled', false);
        // }
        
    });

});
