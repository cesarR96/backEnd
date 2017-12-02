function cargar(){

    $.ajax({
        url:   'data-1.json', 
        type:  'post', 
        dataType: "json",
        success:  function (data) {
            console.log(data)
            var obj = data
            var employee = '';
            var x = "x";
            var selectCiudadp = document.getElementById("selectCiudad");
            var ciudadp = selectCiudadp.value;
            var selectTipop = document.getElementById("selectTipo");
            var tipop = selectTipop.value;
            var rango = document.getElementById("rangoPrecio");//////
            var rangop = rango.value;
            var separador = ";";
            var arregloRango = rangop.split(separador);  // arreglo con el que se hace la validacion
            
            $(".itemMostrado").remove(); //borra el contenido que este en el div 
            $.each(obj, function(key, value) {
             
            //inicio de split a pie , recordar buscar forma mas facil
            var separador = ("$")
            var coma = (",")
            var precio2 = value.Precio.split(separador);
            var valor = precio2[1];
            var precio3 = valor.split(coma);
            var res = precio3[0] + precio3[1];
            //fin de split a pie
            //si no tiene tipo ni ciudad pasar a la siguiente
            if (tipop != value.Tipo || ciudadp != value.Ciudad ) {
               //primer validacion si ciudad y tipo no se a selecionado entonces que muestre todos
               if (ciudadp == value.Ciudad && tipop == x   ) { 
                
              //validacion de precio
              if (res >= arregloRango[0] && res <= arregloRango[1]) {
                employee += "<div class='itemMostrado card'>";
                employee += "<img src='img/home.jpg' alt='Demo'>";
                employee += "<div class='card-stacked'>";
                employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
                employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
                employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
                employee += "<strong>Codigo: </strong>" + value.Codigo_Postal +"</br>";
                employee += "<strong>Tipo: </strong>" + value.Tipo +"</br>";
                employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
                employee += "<div class='card-action'>VENTAS</div>";
                employee += "</div>";
                employee += "</div>";
                console.log(value.Id);
                console.log("entra a 1") ;
                }//fin precio
                
               }//fin de if
               //cuando solo selecione tipo
               else if(tipop == value.Tipo && ciudadp == x){
                //validacion de precio
                if (res >= arregloRango[0] && res <= arregloRango[1]) {
                    employee += "<div class='itemMostrado card'>";
                    employee += "<img src='img/home.jpg' alt='Demo'>";
                    employee += "<div class='card-stacked'>";
                    employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
                    employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
                    employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
                    employee += "<strong>Codigo: </strong>" + value.Codigo_Postal +"</br>";
                    employee += "<strong>Tipo: </strong>" + value.Tipo +"</br>";
                    employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
                    employee += "<div class='card-action'>VENTAS</div>";
                    employee += "</div>";
                    employee += "</div>";
                    console.log("entra a 2") ;  
               }// fin precio
             }//fin
         }    
           //validacion con tipo y ciudad   
           if (tipop == value.Tipo && ciudadp == value.Ciudad) {
        //validacion de precio
        if (res >= arregloRango[0] && res <= arregloRango[1]) {
            employee += "<div class='itemMostrado card'>";
            employee += "<img src='img/home.jpg' alt='Demo'>";
            employee += "<div class='card-stacked'>";
            employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
            employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
            employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
            employee += "<strong>Codigo: </strong>" + value.Codigo_Postal +"</br>";
            employee += "<strong>Tipo: </strong>" + value.Tipo +"</br>";
            employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
            employee += "<div class='card-action'>VENTAS</div>";
            employee += "</div>";
            employee += "</div>";
            console.log("entra a 3") ; 
                 } //fin precio
               }//fin  

               if (tipop == x && ciudadp == x) {
            //validacion de precio
            if (res >= arregloRango[0] && res <= arregloRango[1]) {
                employee += "<div class='itemMostrado card'>";
                employee += "<img src='img/home.jpg' alt='Demo'>";
                employee += "<div class='card-stacked'>";
                employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
                employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
                employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
                employee += "<strong>Codigo: </strong>" + value.Codigo_Postal +"</br>";
                employee += "<strong>Tipo: </strong>" + value.Tipo +"</br>";
                employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
                employee += "<div class='card-action'>VENTAS</div>";
                employee += "</div>";
                employee += "</div>"; 
                console.log("entra a 4") ; 
               }//fin precio  
            }  //fin          
        });
                   $("#ok").append(employee);//devuelvo  en el html
                   
               }
           });
}

//funsion que mostrara todos los campos del json

function parametros(){

    $.ajax({
        url:   'data-1.json', 
        type:  'post', 
        dataType: "json",
        success:  function (data) {
            console.log(data)
            var obj = data
            var employee = '';
            $(".itemMostrado").remove();
            $.each(obj, function(key, value) {             
                employee += "<div class='itemMostrado card'>";
                employee += "<img src='img/home.jpg' alt='Demo'>";
                employee += "<div class='card-stacked'>";
                employee += "<strong>Dirección: </strong>" + value.Direccion +"</br>";
                employee += "<strong>Ciudad: </strong>" + value.Ciudad +"</br>";
                employee += "<strong>Telefono: </strong>" + value.Telefono +"</br>";
                employee += "<strong>Codigo: </strong>" + value.Codigo_Postal +"</br>";
                employee += "<strong>Tipo: </strong>" + value.Tipo +"</br>";
                employee += "<strong>Precio: </strong><span class='precioTexto'>" + value.Precio +"</span></br>";
                employee += "<div class='card-action'>VENTAS</div>";
                employee += "</div>";
                employee += "</div>";
                console.log(value.Id)
                console.log("entra a todos") ;
            });
                   $("#ok").append(employee);//devuelvo  en el html
               }
           });
}