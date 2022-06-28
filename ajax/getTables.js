
function findWallet(id) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "GET",
        async: false,
        url: `http://localhost:8080/wallet/getWalletByUserId/${id}`,
        success: function (data){
            // categories = data.category.name;
            // let sumMoney = data.sumMoney;
            let content1 = ` <thead>
            <tr>
                <th>Order</th>
                <th>Icon</th>
                <th>Date</th>
                <th>Name</th>
                <th>Total</th>
                <th>Balance</th>
            </tr>
            </thead>
            <tbody><tr>
                <td>${data[0].id}</td>
                <td><img src="https://via.placeholder.com/110x110" class="product-img" alt="product img"></td>
                <td>${data[0].date}</td>
                <td>${data[0].name}</td>
                <td>${data[0].total}</td>
                <td><div class="progress shadow" style="height: 3px;">
                    <div class="progress-bar" role="progressbar" style="width: 90%"></div>
                </div></td>
            </tr>`
            for (let i = 1; i <data.length; i++) {
                content1 += getTables(data,i)
            }
            document.getElementById('walletTable').innerHTML = content1;
        }

    })
}



function getTables(data,i){
    return `<td>${data[i].id}</td>
                <td><img src="https://via.placeholder.com/110x110" class="product-img" alt="product img"></td>
                <td>${data[i].date}</td>
                <td>${data[i].name}</td>
                <td>${data[i].total}</td>
                <td><div class="progress shadow" style="height: 3px;">
                    <div class="progress-bar" role="progressbar" style="width: 90%"></div>
                </div></td>`
}