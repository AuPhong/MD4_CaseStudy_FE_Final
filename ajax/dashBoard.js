

function updateDashboard(id) {
    let producer = $(`#producer`).val();
    let model = $(`#model`).val();
    let price = $(`#price`).val();
    let smartPhone = {
        producer: producer,
        model: model,
        price: price
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(smartPhone),
        url: `http://localhost:8080/smartphones/${id}`,
        success: successHandler
    })
}