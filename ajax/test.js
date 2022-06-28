let list = {}
let nameWallet = ''
let idWallet
let listTransaction = {}
$(document).ready(function () {
    showList();
    getWallet();
    listAddMoney()

})

function showList() {
    $('#update_name').val('')
    $('#update_note').val('')
    $.ajax({
        url: 'http://localhost:8080/wallet/getWalletByUserId/1',
        method: 'GET',
        contentType: 'application/json; charset=utf8',
        async: false,
        success: function (data) {
            list = data;
            let name = '';
            console.log("data ==== ", data)
            for (let i = 0; i < data.length; i++) {
                name += '<option class="form-control" style="background: #317cb5 ">' + data[i].name + '</option>'
            }
            document.getElementById('testwallet').innerHTML = name

        }
    })
}

function getWallet() {
    nameWallet = document.getElementById('testwallet').value
    console.log("check name Wallet ======------ ", nameWallet)
    console.log("check thang list ===== ", list)
    console.log("check length ====> ", list.length)
    let length = list.length
    for (let i = 0; i < length; i++) {
        console.log("check i name ===== >> ", i)
        console.log("check list === >> ", list[i].name)
        if (nameWallet == (list[i].name)) {
            idWallet = i + 1
        }
    }
    console.log("check id wallet ------------========> ", idWallet)

    $.ajax({
        url: 'http://localhost:8080/wallet/getWallet/1/' + idWallet,
        method: 'GET',
        contentType: 'application/json; charset=utf8',
        async: false,
        success: function (data) {

            let dataName = '';
            dataName += '<div class="form-control"><label><p>' + data.name + '</p></label></div>'
            document.getElementById('name_wallet').innerHTML = dataName
            let dataNote = '';
            dataNote += '<div class="form-control"><label><p>' + data.note + '</p></label></div>'
            document.getElementById('note_wallet').innerHTML = dataNote
            let dataBalance = '';
            dataBalance += '<label><p>' + data.balance + '</p></label>'
            document.getElementById('balance_wallet').innerHTML = dataBalance
            let dataTotal = '';
            dataTotal += '<label><p>' + data.total + '</p></label>'
            document.getElementById('total_wallet').innerHTML = dataTotal
            listTransactions();
            listAddMoney();
        }
    })

}

function editWallet() {
    document.getElementById('check_update').innerHTML = ""
    console.log("edit check idwallet =====>> ", idWallet)
    $.ajax({
        url: 'http://localhost:8080/wallet/getWallet/1/' + idWallet,
        method: 'GET',
        dataType: 'json',
        async: false,
        success: function () {
            document.getElementById('update_name').type = "text"
            document.getElementById('update_note').type = "text"
        }
    })
    event.preventDefault();
}

function updateWallet() {

    let wallet = {}
    let length = list.length
    let count = 0
    let name_wallet = document.getElementById('update_name').value;
    for (let i = 0; i < length; i++) {
        if (name_wallet == list[i].name || name_wallet == "") {
            console.log("check trong if ===> ", list[i].name)
            console.log("check name_wallet trong if ===>", name_wallet)
            document.getElementById('check_update').innerHTML = "Moi nhap lai ten vi"
            document.getElementById('update_name').innerHTML = " "
            document.getElementById('update_note').innerHTML = " "
            document.getElementById('update_name').type = "hidden"
            document.getElementById('update_note').type = "hidden"
            count++
            break;
        }
    }
    if (count == 0) {
        wallet.name = $('#update_name').val();
        wallet.note = $('#update_note').val();
        document.getElementById('update_name').innerHTML = " "
        document.getElementById('update_note').innerHTML = " "
        document.getElementById('update_name').type = "hidden"
        document.getElementById('update_note').type = "hidden"

        document.getElementById('check_update').innerHTML = "Update successfully!"
        console.log("nhay vao count = 0 khong?? ")

    } else {
        wallet.name = document.getElementById('testwallet').value;
    }

    let walletOBJ = JSON.stringify(wallet);
    $.ajax({
        url: 'http://localhost:8080/wallet/editWallet/' + idWallet + '/1',
        method: 'PUT',
        contentType: 'application/json; charSet:utf8',
        data: walletOBJ,
        success: function (data) {
            showList();
            getWallet();
            console.log("check data name === > ", data.name)
        }
    })
    console.log("check id wallet trong updateWallet ===> ", idWallet)

    event.preventDefault();
}

function listTransactions() {
    console.log("check id wallet trong trans ---->> ", idWallet)
    $.ajax({
        url: 'http://localhost:8080/transaction/allTransactionByIdWallet/' + idWallet,
        method: 'GET',
        contentType: 'application/json; charset=utf8',
        async: false,
        success: function (data) {
            if (data == {}) {
                listTransaction = {}
            } else {
                listTransaction = data
            }
            console.log("check list Trans ----->> ", listTransaction)
            let dataHtml = ''
            for (let i = 0; i < data.length; i++) {
                dataHtml +=
                    '<tr>' +
                    '<td>' + data[i].category.name + '</td>' +
                    '<td>' + data[i].amount + '</td>' +
                    '<td>' + data[i].date.substring(0, 16) + '</td>' +
                    '<td>' + '<button>Edit</button>' + '</td>' +
                    '<td>' + '<button>Delete</button>' + '</td>' +
                    '<tr>'
                // '<tr>' +
                // '<td>' + data[i].category.name + '</td>' +
                // '<td>' + data[i].amount + '</td>' +
                // '<td>' + data[i].date + '</td>' +
                // '<td>' + '<button>Edit</button>' + '</td>' +
                // '<td>' + '<button>Delete</button>' + '</td>' +
                // '<tr>'
            }
            document.getElementById('listTransactions').innerHTML = dataHtml;
        }
    })
}

function listAddMoney() {
    $.ajax({
        url: 'http://localhost:8080/addMoney/allGetMoneyByIdWallet/' + idWallet,
        method: 'GET',
        contentType: 'application/json; charset=utf8',
        async: false,
        success: function (data) {
            console.log("check DATA trong add money -----=====>> ", data)
            console.log("check list trans trong add money --------- >>> ", listTransaction)
            let dataHtml = ''

            for (let i = 0; i < data.length; i++) {
                console.log("log thu cai i ----->> ", i)
                dataHtml +=
                    '<div  class="form-group" ><tr class="form-control">' +
                    '<td>' + 'Add Money' + '</td>' +
                    '<td>' + data[i].money + '</td>' +
                    '<td>' + data[i].date.substring(0, 16) + '</td>'
                dataHtml += dataTransaction();
                dataHtml += '</tr></div>'
            }
            for (let i = 0; i < listTransaction.length; i++) {
                dataHtml +=
                    '<div  class="form-group" ><tr class="form-control">' +
                    '<td>' + listTransaction[i].category.name + '</td>' +
                    '<td>' + listTransaction[i].amount + '</td>' +
                    '<td>' + listTransaction[i].date.substring(0, 16) + '</td>'
                dataHtml += dataTransaction(listTransaction[i].id);
                // console.log("check id trans ------>>>  ", listTransaction[i].id)
                dataHtml += '</tr></div>'

            }


            document.getElementById('listTransactions').innerHTML = dataHtml;
        }
    })
    $('btn-deleteWallet').click(function deleteWallet() {

        $.ajax({
            url: 'http://localhost:8080/wallet/1/' + idWallet,
            method: 'DELETE',
            contentType: 'application/json; charset=utf8',
            async: false,
            success: function (data) {
                document.getElementById('check_update').innerHTML = "Xoa thanh cong!"
            }
        })
        event.preventDefault();
    })
}



function deleteTrans(id) {
    console.log("Vao delete khong??? ")
    console.log("test thu cai id xem nao ------>> ", id)
    event.preventDefault();
    $.ajax( {
        url: 'http://localhost:8080/transaction/deleteTransaction/1/' + id,
        method: 'DELETE',
        contentType: 'application/json; charset=utf8',
        async: false,
        success: function () {
            console.log("id nhu nao day ------>> ", id)
        }
    })
}

function dataTransaction(id) {
    console.log("show id trong data trans --------->> ", id)
    let dataHtml =  '<td>' + '<button type="submit" class="btn btn-light px-5">Edit</button>' + '</td>' +
                    '<td>' + '<button type="submit" class="btn btn-light px-5" onclick="deleteTrans('+id+')">Delete</button>' + '</td>'
    return dataHtml;
    event.preventDefault();
}








