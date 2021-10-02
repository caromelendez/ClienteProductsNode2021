 $('#guarda_product').click(function(){
     var code = $('#code').val()
     var name = $('#name').val()
     var price = $('#price').val()
     var stock = $('#stock').val()

     var data_product = {'code': code, 'name': name, 'price': price, 'stock': stock}
 
     $.ajax({
         type:'POST',
         url:'http://localhost:8985/product',
         contentType:'application/json',
         data: JSON.stringify(data_product)
     }).done(function(){
         alert('Producto Grabado con Exito')
     }).fail(function(){
         alert(err)
     })
})

$('#obtener_product').click(function(){
    var id = $('#id').val()

    fetch('http://localhost:8985/product?id='+ id)
    .then(response => response.json())
    .then(data => alert(JSON.stringify(data)))
})

$('eliminar_product').click(function(){
    var id = $('#id').val()
    
    $.ajax({
        type:'DELETE',
        url:'http://localhost:8985/product?id='+ id,
        contentType:'application/json'
    }).done(function(){
        alert('Producto Eliminado con Exito')
    }).fail(function(){
        alert(err)
    })
})

$('actualizar_product').click(function(){
    var id = $('#id').val()
    
    $.ajax({
        type:'PUT',
        url:'http://localhost:8985/product?id='+id,
        contentType:'application/json'
    }).done(function(){
        alert('Producto Actualizado con Exito')
    }).fail(function(){
        alert(err)
    })
})