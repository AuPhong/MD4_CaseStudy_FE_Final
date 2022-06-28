
// let id = window.sessionStorage.getItem("id")

$(document).ready(function (){
    $('#btn_create_wallet').click(function (){
        let wallet = {}
        wallet.name = $('#walletName').val()
        wallet.total = $('#wallet_moneyAmount').val()
        wallet.note = $('#walletNote').val()
        let walletObj = JSON.stringify(wallet)
        let wallet_exist = "This name is already exist, try another one!";
        console.log(walletObj)
        $.ajax({
            url: 'http://localhost:8080/wallet/createWallet1/'+id,
            method: 'post',
            data: walletObj,
            contentType: 'application/json; charSet=utf8',
            success: function (data){
                if (data == wallet_exist){
                    document.getElementById("create_wallet_error").innerHTML = `<p>Wallet's name is already exist, try another one!</p>`
                    return
                }
                alert("Create success")
                console.log(data)
                location.reload()
                getDashBoardInfor(id)
            }
        })
    })
})
