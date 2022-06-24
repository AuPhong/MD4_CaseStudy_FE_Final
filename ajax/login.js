
function login() {
    //lay du lieu
    let username = $('#username').val();
    let password = $('#password').val();
    let login = {
        username: username,
        password: password,
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(login),
        //tên API
        url: "http://localhost:8080/login",
        //xử lý khi thành công
        success: function (data) {
            document.getElementById('messageLogin').innerHTML = "Login Successful ! Wait 3s";
            sessionStorage.setItem('id',`${data.id}`)
                setTimeout(function() {
                    window.location.href = "index.html"
                }, 2000);
        }
    });
    //chặn sự kiện mặc định của thẻ
    document.getElementById('messageLogin').innerHTML = `  <div style="filter: brightness(120%)" id="messageFailed" class="small-font text-uppercase text-center py-2 text-danger bg-danger-light2 ">"Login Failed ! Try Again Please !</div>`

    event.preventDefault();
}