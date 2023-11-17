let email = "";
let password = "";
const checkImg = document.createElement("img");
checkImg.src = "check.png";

// for (let i = 0; i < inputs.length; i++) {
//     console.log(inputs[i]);
//     inputs[i].addEventListener("onChange", () => {
//         if (inputs[i].getClassList().contains("valid")) {
//             console.log("valid" + inputs[i].value);
//         } else {
//             console.log("invalid" + inputs[i].value);
//         }
//     });
// }

$(document).ready(function () {
    $(".tab-content").hide();
    $(".tab-content.active").show();

    $("ul.tabs li").click(function () {
        var tab_id = $(this).attr("tab");

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content.active")
            .stop()
            .fadeOut(500, () => {
                $(".tab-content.active").removeClass("active");
                $("#" + tab_id)
                    .addClass("active")
                    .stop()
                    .fadeIn(500);
            });
    });

    $.validator.addMethod("passwordRegex", (value, element) => {
        return value.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/
        );
    });

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
                required: true,
                email: true,
            },
            password: "required",
        },
        messages: {
            email: {
                required: "Please enter your email address!",
                email: "Your email address is invalid!",
            },
            password: "Please enter your password!",
        },
        submitHandler: function (form) {
            if ($("#email").val() === email && $("#password").val() === password) {
                $("#login-form").children().remove();
                $("#login-form").append(
                    `<h2>You are logged in.</h2>`
                );
            }
            else {
                $("#login-state").text("Credentials do not match!").addClass("invalidCredentials");
            }
        },
        success: function (label, element) {
            label.css("background", "none");
            $(element)
                .siblings()
                .filter("." + $(element).attr("name"))
                .removeClass("hidden");
        },
    });

    $("#signup-form").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                passwordRegex: true,
            },
            confirmpassword: {
                required: true,
                equalTo: "#password-signup",
            },
            gender: "required",
        },
        messages: {
            firstname: "Please enter your first name!",
            lastname: "Please enter your last name!",
            email: {
                required: "Please enter your email address!",
                email: "Please enter a valid email address!",
            },
            password: {
                required: "Please enter your password!",
                passwordRegex:
                    "Requirement: at lest 6 characters, one capital letter, one lowercase letter, at least one digit, and one special character!",
            },
            confirmpassword: {
                required: "Please re-enter your password!",
                equalTo: "Password does not match!",
            },
            gender: {
                required: "Please select you gender!",
            },
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            email = $("#email-signup").val();
            password = $("#password-signup").val();
            $("#signup-form").children().remove();
            $("#signup-form").append(
                `<h2>You are signed up.</h2>`
            );
        },
        success: function (label, element) {
            label.css("background", "none");
            $(element).siblings().filter("."+$(element).attr("name")).removeClass("hidden");
        }
    });
});
