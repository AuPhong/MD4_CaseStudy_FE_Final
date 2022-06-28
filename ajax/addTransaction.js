$(document).ready(function (){
    $.ajax({
        url: 'http://localhost:8080/wallet/getWalletByUserId/'+id,
        contentType: 'application/json',
        method: 'get',
        async: false,
        success: function (data){
            document.getElementById('select_wallet_transaction').innerHTML = `<option value="" disabled selected>Select your wallet</option>`
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                document.getElementById('select_wallet_transaction').innerHTML += `<option>${data[i].name}</option>`
            }
        }
    })
})

$(document).ready(function (){
    $.ajax({
        url: 'http://localhost:8080/categories/list/'+id,
        contentType: 'application/json',
        method: 'get',
        async: false,
        success: function (data){
            document.getElementById('select_category_transaction').innerHTML = `<option value="" disabled selected>Select category</option>`
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                document.getElementById('select_category_transaction').innerHTML += `<option>${data[i].name}</option>`
            }
        }
    })
})

$(document).ready(function (){
    $('#btn_add_transaction').click(function (){
        let transaction = {}
        transaction.wallet_name = $('#select_wallet_transaction').val()
        transaction.category_name = $('#select_category_transaction').val()
        transaction.money_amount = $('#add_money_amount_transaction').val()
        transaction.date = $('#add_date_transaction').val()
        transaction.note = $('#transaction_note').val()
        let transactionObj = JSON.stringify(transaction)
        $.ajax({
            url: 'http://localhost:8080/transaction/createTransaction/'+id,
            contentType: 'application/json',
            method: 'post',
            data: transactionObj,
            success: function (data){
                console.log(data)
                alert("Add transaction success!")
                location.reload()
                getDashBoardInfor(id)
            }
        })
    })



})

