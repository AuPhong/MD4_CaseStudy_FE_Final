$(document).ready(function () {

    $.ajax({
        url: "http://localhost:8080/userInfo/findByUserId/16",
        method: "get",
        contentType: "application/json; charSet=utf8",
        success: function (data) {
            console.log(data)
            document.getElementById("profile-image").src = data.avatar;
            document.getElementById("user_name").innerHTML = data.name;
            document.getElementById("user_profile_name").innerHTML = data.name;
            document.getElementById("user_profile_phonenumber").innerHTML = data.phoneNumber;
            document.getElementById("user_profile_address").innerHTML = data.address;

            document.getElementById("user_edit_name").value = data.name;
            document.getElementById("user_edit_address").value = data.address;
            // document.getElementById("user_edit_avatar").value = data.avatar;
            document.getElementById("user_edit_phonenumber").value = data.phoneNumber;
            document.getElementById("user_edit_username").value = data.user.username;
            console.log("phoneNumber=====",data.phoneNumber)
        }
    })
})

$('#btn_edit').click(function (){
    $.ajax({

    })
})
