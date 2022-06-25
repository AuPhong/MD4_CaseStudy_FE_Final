$(document).ready(function () {
    let signUpForm = {};
    $('#btn-create').click(function () {
        signUpForm.name = $('#name').val()
        signUpForm.username = $('#username').val()
        signUpForm.password = $('#password').val()
        signUpForm.email = $('#email').val()
        signUpForm.confirmPassword = $('#confirmPassword').val()
        let signUpFormObj = JSON.stringify(signUpForm);
        // console.log(signUpFormObj)
        let sameName = "This username is already exist, please try again!";
        let incorrectPassword = "Confirm password not match, please try again!";
        let createSuccess = "Create success!";
        let no_field = "Please enter all the fields!";
        let no_email = "This email is already exist";
        let not_an_email = "Not an email, try again!"
        $.ajax({
            url: "http://localhost:8080/register",
            contentType: "application/json; charSet = utf8",
            data: signUpFormObj,
            method: "post",
            success: function (data) {
                console.log("data=========", data)
                if (data == no_field) {
                    document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Please enter all the field !</p>`
                    return;
                }
                if (data == sameName) {
                    document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"This username is already exist !</p>`
                    return
                }
                if (data == incorrectPassword) {
                    document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Confirm password not match, try again !</p>`
                    return;
                }
                if (data == no_email){
                    document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"This email is already exist !</p>`
                    return;
                }
                if (data == not_an_email){
                    document.getElementById("register-err").innerHTML = `  <p style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Not an email, try again!</p>`
                    return;
                }
                if (JSON.stringify(data) == JSON.stringify(createSuccess)) {
                    window.location.href = "login.html";
                }

            }
        })
    })
})
