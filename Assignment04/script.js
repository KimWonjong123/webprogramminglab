let id = "";
let password = "";

$(document).ready(function () {
    $(".tab-content").hide();
    $(".tab-content.active").show();

    $("ul.tabs li").click(function () {
        var tab_id = $(this).attr("tab");

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content.active").fadeOut(500, () => {
            $(".tab-content.active").removeClass("active");
            $("#" + tab_id).addClass("active").fadeIn(500);
        });
    });

    $.validator.addMethod("passwordRegex", (value, element) => {
        return value.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/
        );
    })

    $.validator.setDefaults({
        onkeyup: function (element) {
            $(element).valid();
        },
        onfocusin: function (element) {
            $(element).valid();
        },
    });

    $("#login-form").validate({
        rules: {
            email: {
                "required": true,
                "email": true
            },
            password: "required",
        },
        messages: {
            email: {
                "required": "Please enter your email address!",
                "email": "Your email address is invalid!"
            },
            password: "Please enter your password!",
        },
        submitHandler: function (form) {
            console.log("Form submitted");
        }
    });

    $("#signup-form").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                "required": true,
                "email": true
            },
            password: {
                "required": true,
                "passwordRegex": true
            },
            confirmpassword: {
                "required": true,
                "equalTo": "#password-signup"
            },
            gender: "required",
        },
        messages: {
            firstname: "Please enter your first name!",
            lastname: "Please enter your last name!",
            email: {
                "required": "Please enter your email address!",
                "email": "Please enter a valid email address!"
            },
            password: {
                "required": "Please enter your password!",
                "passwordRegex": "Requirement: at lest 6 characters, one capital letter, one lowercase letter, at least one digit, and one special character!"
            },
            confirmpassword: {
                "required": "Please re-enter your password!",
                "equalTo": "Password does not match!"
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parent());
            }
            else {
            error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            console.log("Form submitted");
        }
    });
});
