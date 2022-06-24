$(document).ready(function () {
    let signUpForm = {};
    $('#btn-create').click(function () {
        signUpForm.name = $('#name').val()
        signUpForm.username = $('#username').val()
        signUpForm.password = $('#password').val()
        signUpForm.confirmPassword = $('#confirmPassword').val()
        let signUpFormObj = JSON.stringify(signUpForm);
        // console.log(signUpFormObj)
        let sameName = "This username is already exist, please try again!";
        let incorrectPassword = "Confirm password not match, please try again!";
        let createSuccess = "Create success!";
        let no_field = "Please enter all the fields!";
        $.ajax({
            url: "http://localhost:8080/register",
            contentType: "application/json; charSet = utf8",
            data: signUpFormObj,
            method: "post",
            success: function (data) {
                console.log("data=========", data)
                if (data == no_field) {
                    document.getElementById("register-err").innerHTML = "Please enter all the fields!";
                    return;
                }
                if (data == sameName) {
                    document.getElementById("register-err").innerHTML = "This username is already exist, please try again!";
                    return
                }
                if (data == incorrectPassword) {
                    document.getElementById("register-err").innerHTML = "Confirm password not match, please try again!";
                    return;
                }
                if (JSON.stringify(data) == JSON.stringify(createSuccess)) {
                    window.location.href = "login.html";
                }

            }
        })
    })
})
