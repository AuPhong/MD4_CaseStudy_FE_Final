let id = window.sessionStorage.getItem("id")
$(document).ready(function () {
    showProfile()
})

function showProfile(){
    $.ajax({
        url: "http://localhost:8080/userInfo/findByUserId/" + id,
        method: "get",
        contentType: "application/json; charSet=utf8",
        success: function (data) {
            console.log(data)
            document.getElementById("profile-image").src = data.avatar;
            document.getElementById("user_name").innerHTML = data.name;
            document.getElementById("user_profile_name").innerHTML = data.name;
            document.getElementById("user_profile_phonenumber").innerHTML = data.phoneNumber;
            document.getElementById("user_profile_email").innerHTML = data.email;
            document.getElementById("user_profile_address").innerHTML = data.address;

            document.getElementById('username').innerText = data.name;
            document.getElementById('userEmail').innerText = data.email;
            document.getElementById('user_avatar1').src = data.avatar;
            document.getElementById('user_avatar2').src = data.avatar;

            document.getElementById("user_edit_name").value = data.name;
            document.getElementById("user_edit_address").value = data.address;
            // document.getElementById("user_edit_avatar").value = data.avatar;
            document.getElementById("user_edit_phonenumber").value = data.phoneNumber;
            document.getElementById("user_edit_username").value = data.user.username;
            // console.log("phoneNumber=====", data.phoneNumber)
        }
    })
}

$('#btn_changepassword').click(function () {
    let changePassword = {}
    changePassword.oldPassword = $('#user_edit_password').val()
    changePassword.newPassword = $('#user_edit_newPassword').val()
    changePassword.confirmNewPassword = $('#user_edit_confirmNewPassword').val()
    let changePasswordObj = JSON.stringify(changePassword)
    console.log("changePassword====", changePassword)
    console.log("changePasswordObj=====", changePasswordObj)
    let no_oldPass = "Current password not true!";
    let no_confirm = "Confirm password not match!";
    let not_null = "Password cannot be empty!"
    $.ajax({
        url: 'http://localhost:8080/changePassword/' + id,
        method: 'post',
        contentType: 'application/json; charSet=utf8',
        data: changePasswordObj,
        success: function (data) {
            console.log(data)

            if (data == not_null) {
                document.getElementById('changePasswordError').innerHTML = '<div id="register-err" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 " style="color: red">Password cannot be empty, try again!!</div>\n' +
                    '                <br>'
                return
            }
            if (data == no_oldPass) {
                document.getElementById('changePasswordError').innerHTML = '<div id="register-err" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 " style="color: red">Current password not match, try again!</div>\n' +
                    '                <br>'
                return
            }
            if (data == no_confirm) {
                document.getElementById('changePasswordError').innerHTML = '<div id="register-err" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 " style="color: red">Confirm password not match, try again!</div>\n' +
                    '                <br>'
                return;
            } else {
                document.getElementById('changePasswordError').innerHTML = "";
                alert('Success!')
            }
        }
    })
})

$('#btn_edit').click(function () {
    let userInfo = {}
    userInfo.name = $('#user_edit_name').val()
    userInfo.avatar = resultImage()
    userInfo.phoneNumber = $('#user_edit_phonenumber').val()
    userInfo.address = $('#user_edit_address').val()
    userInfo.email = "";
    let userInfoObj = JSON.stringify(userInfo)
    $.ajax({
        url: 'http://localhost:8080/userInfo/updateUser/' + id,
        method: 'put',
        data: userInfoObj,
        contentType: 'application/json; charSet=utf8',
        success: function (data){

            console.log(data)
            alert("Edit success!")
            showProfile()
        }
    })
})


