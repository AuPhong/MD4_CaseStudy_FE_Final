// let id = sessionStorage.getItem("id")
$(document).ready(function (){
    $.ajax({
        url: 'http://localhost:8080/wallet/getWalletByUserId/'+id,
        contentType: 'application/json',
        method: 'get',
        async: false,
        success: function (data){
            document.getElementById('select_wallet').innerHTML = `<option value="" disabled selected>Select your wallet</option>`
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                document.getElementById('select_wallet').innerHTML += `<option>${data[i].name}</option>`
            }
        }
    })
})

$('#btn_add_money').click(function (){
    let wallet = $('#select_wallet').val()
    let money = $('#add_money_amount').val()
    let moneyObj = JSON.stringify(money)
    console.log("moneyObj====", moneyObj)
    $.ajax({
        url: 'http://localhost:8080/addMoney/addByWalletName/'+wallet,
        contentType: 'application/json; charSet=utf8',
        method: 'post',
        data: moneyObj,
        success: function (data) {
            console.log(data)
            alert('Add success!')
            location.reload()
            getDashBoardInfor(id)
        }
    })
})


// function getAllWalletOfUser(){
//     $.ajax({
//         url: 'http://localhost:8080/wallet/getWalletByUserId/'+id,
//         contentType: 'application/json',
//         method: 'get',
//         async: false,
//         success: function (data){
//             // console.log(data)
//             return data
//         }
//     })
// }
