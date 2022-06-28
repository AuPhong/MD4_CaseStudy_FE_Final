$('#btn_create_category').click(function (){
    let category = {}
    category.name = $('#category_name').val()
    let categoryObj = JSON.stringify(category)
    $.ajax({
        url: 'http://localhost:8080/categories/create/'+id,
        contentType: 'application/json; charSet=utf8',
        data: categoryObj,
        method: 'post',
        success: function (data){
            alert('Create success')
            location.reload()
        }
    })
})