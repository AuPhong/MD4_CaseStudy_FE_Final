function logOut(){
    sessionStorage.setItem('id',"");
    window.location.href = "login.html"
}


var moneyFlow

var overAllIncome
var overAllOutcome
function chart1(id,month){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        async: false,
        dataType: 'JSON',
        data: {
            month: month,
            year: 2022
        },
        url: `http://localhost:8080/wallet/inOutMonth/${id}`,
        success: function (data){
            let inFlow = data.inFlow;
            let outFlow = data.outFlow;
            let arr = [inFlow,outFlow]
           overAllIncome = inFlow
            overAllOutcome = outFlow
            moneyFlow = arr;
            return arr;
        }
    })
}

const d = new Date();
let month = d.getMonth();
function setData() {
    chart1(id,month);
    document.getElementById(`overallIncome`).innerHTML = overAllIncome.toLocaleString('en-US')+" "+"VND";
    document.getElementById(`overOutcome`).innerHTML = overAllOutcome.toLocaleString('en-US')+" "+"VND";
    document.getElementById(`overallBalance`).innerHTML = overAllIncome-overAllOutcome+" "+"VND";
}

function getName(id) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        url: `http://localhost:8080/userInfo/findByUserId/${id}`,
        success: function (data){
            document.getElementById('username').innerText = data.name;
            document.getElementById('userEmail').innerText = data.email;

        }
    })
}




var categoriesVar =[]
function chart2(id){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        async: false,
        url: `http://localhost:8080/transaction/listCate/${id}`,
        success: function (data){
             // categories = data.category.name;
             // let sumMoney = data.sumMoney;
         let content1 = `<tr>
                   <td><i class="fa fa-circle text-white mr-2"></i>${data[0].category.name}</td>
                   <td>${data[0].sumMoney.toLocaleString('en-US')} VND</td>
                   <td>+${Math.random().toFixed(1)*100+"%"}</td>
                   </tr>`
            for (let i = 1; i <data.length; i++) {
                content1 += getChart2Content(data,i)
            }
            document.getElementById('chart2Content').innerHTML = content1;

            for (let i = 0; i <data.length; i++) {
                categoriesVar.push(data[i].category.name,data[i].sumMoney)
            }


        }

    })
}

function getChart2Content(categories,index) {
    return `<tr>
                   <td><i class="fa fa-circle text-light-${categories[1].id} mr-2"></i>${categories[index].category.name}</td>
                   <td>${categories[index].sumMoney.toLocaleString('en-US')} VND</td>
                   <td>+${Math.random().toFixed(1)*100+"%"}</td>
                   </tr>`;
}

function getSmartphone(smartphone) {
    return `<tr><td >${smartphone.producer}</td><td >${smartphone.model}</td><td >${smartphone.price}</td>` +
        `<td><a class="deleteSmartphone" href="${smartphone.id}">Delete</a></td>`+
        `<td><a class="editSmartphone" href="${smartphone.id}">Edit</a></td></tr>`
        ;
}

function getWallets(wallets){}