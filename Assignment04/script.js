let email = "";
let password = "";

$(document).ready(function () {

    // hide all tab content and show the first one
    $(".tab-content").hide();
    $(".tab-content.active").show();

    // when tab is clicked, fade out and fade in the tab content
    $("ul.tabs li").click(function () {
        var tab_id = $(this).attr("tab");

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content.active")
            .stop() // stop the current animation
            .fadeOut(500, () => { // first fade out the current tab content and then fade in the new tab content
                $(".tab-content.active").removeClass("active");
                $("#" + tab_id)
                    .addClass("active")
                    .stop()
                    .fadeIn(500);
            });
    });

    // validate password condition
    $.validator.addMethod("passwordRegex", (value, element) => {
        return value.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/
        );
    });

    // validate if there is no digit
    $.validator.addMethod("noDigit", (value, element) => {
        return !value.match(/\d/);
    });

    // validate if the first letter is capital
    $.validator.addMethod("startWithCapital", (value, element) => {
        return value.match(/^[A-Z]/);
    });

    $.validator.setDefaults({
        // everytime keyup or focusin, check if the input is valid
        onkeyup: function (element) {
            if (!$(element).valid()) {
                // if input is invalid, remove check image on current input
                $(element).siblings().filter("img." + $(element).attr("name")).addClass("hidden");
            }

            // check every error label
            // if it is empty, that label is valid
            // then add noBackground class to remove background
            $("label.error").each((idx, item) => {
                if ($(item).text() === "") {
                    $(item).addClass("noBackground");
                }
                else {
                    $(item).removeClass("noBackground");
                }
            });
        },
        onfocusin: function (element) {
            if (!$(element).valid()) {
                $(element)
                    .siblings()
                    .filter("img." + $(element).attr("name"))
                    .addClass("hidden");
            }
            $("label.error").each((idx, item) => {
                if ($(item).text() === "") {
                    $(item).addClass("noBackground");
                } else {
                    $(item).removeClass("noBackground");
                }
            });
        },
    });

    // validator for login form
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
                // when login is success, remove all children of login-form and append a new h2 tag
                $("#login-form").children().remove();
                $("#login-form").append(
                    `<h2>You are logged in.</h2>`
                );
            }
            else {
                // when login is failed, show invalid credentials
                $("#login-state").text("Credentials do not match!").addClass("invalidCredentials");
            }
        },
        success: function (label, element) {
            // when input is valid, remove error label and show check image
            label.css("background", "none");
            $(element)
                .siblings()
                .filter("." + $(element).attr("name"))
                .removeClass("hidden");
        },
    });

    // validator for signup form
    $("#signup-form").validate({
        rules: {
            firstname: {
                required: true,
                noDigit: true,
                startWithCapital: true,
            },
            lastname: {
                required: true,
                noDigit: true,
                startWithCapital: true,
            },
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
            firstname: {
                required: "Please enter your first name!",
                noDigit: "First name cannot contain numbers!",
                startWithCapital: "First name must start with a capital letter!",
            },
            lastname: {
                required: "Please enter your last name!",
                noDigit: "Last name cannot contain numbers!",
                startWithCapital: "Last name must start with a capital letter!",
            },
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
            // if input is radio, append error label to its parent since two radio buttons are in one div
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
            // when input is valid, remove error label and show check image
            $(element).siblings().filter("."+$(element).attr("name")).removeClass("hidden");
        }
    });
});
