function logOut(){
    sessionStorage.setItem('id',"");
    window.location.href = "login.html"
}


var moneyFlow


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
            moneyFlow = arr;
            return arr;
        }
    })
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

var categories
function chart2(id){
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
        url: `http://localhost:8080/categories/list/`+id,
        success: function (data){
             categories = data.name;
         let content = `<tr>
                   <td><i class="fa fa-circle text-white mr-2"></i>data.name</td>
                   <td>$5856</td>
                   <td>+55%</td>
                   </tr>`
        }
    })
}

function getChart2Content(categories) {
    return `<tr>
                   <td><i class="fa fa-circle text-light-${categories.id} mr-2"></i>categories.name</td>
                   <td>$5856</td>
                   <td>+55%</td>
                   </tr>`;
}

function getSmartphone(smartphone) {
    return `<tr><td >${smartphone.producer}</td><td >${smartphone.model}</td><td >${smartphone.price}</td>` +
        `<td><a class="deleteSmartphone" href="${smartphone.id}">Delete</a></td>`+
        `<td><a class="editSmartphone" href="${smartphone.id}">Edit</a></td></tr>`
        ;
}
