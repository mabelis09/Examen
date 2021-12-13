function actualizar_info()  {
    apellido = document.getElementById('apellido_user').value;
    nombre = document.getElementById('nombre_user').value;
    alert("Datos actualizados correctamente, Sr(a) " + apellido);
    document.getElementById('nombre_completo').innerHTML = apellido + ', ' + nombre;
}

function actualizar_factura(){
    cant_prod_1 = parseInt(document.getElementById('p1').value);
    cant_prod_2 = parseInt(document.getElementById('p2').value);
    cant_prod_3 = parseInt(document.getElementById('p3').value);
    edad = parseInt(document.getElementById('edad').value);
    sexo = document.getElementById('sexo').value;
    jubilado = 0;

    producto1 = 16.34 * cant_prod_1;
    producto2 = 12.78 * cant_prod_2;
    producto3 = 10.47 * cant_prod_3;
    
    document.getElementById('cant_p1').innerHTML = cant_prod_1;
    document.getElementById('cant_p2').innerHTML = cant_prod_2;
    document.getElementById('cant_p3').innerHTML = cant_prod_3;

    document.getElementById('total_precio1').innerHTML = "B/" + producto1.toFixed(2);
    document.getElementById('total_precio2').innerHTML = "B/" + producto2.toFixed(2);
    document.getElementById('total_precio3').innerHTML = "B/" + producto3.toFixed(2);

    if((edad >= 62 && sexo == 'M') || (edad >= 57 && sexo == 'F')){
        jubilado = subtotal * 0.15;
        document.getElementById('jubilado').innerHTML = "B/" + jubilado.toFixed(2);
    }
    if (producto1 == 0){
        document.getElementById('total_precio1').innerHTML = "B/00.00";
    }
    if (producto2 == 0){
        document.getElementById('total_precio2').innerHTML = "B/00.00";
    }
    if (producto3 == 0){
        document.getElementById('total_precio3').innerHTML = "B/00.00";
    }
    if (jubilado == 0){
        document.getElementById('jubilado').innerHTML = "B/00.00";
    }
    

    subtotal = producto1 + producto2 + producto3;
    document.getElementById('subtotal').innerHTML = "B/" + subtotal.toFixed(2);
    if (subtotal == 0){
        document.getElementById('subtotal').innerHTML = "B/00.00";
    }

    impuesto = subtotal * 0.07;
    document.getElementById('impuesto').innerHTML = "B/" + impuesto.toFixed(2);
    if (impuesto == 0){
        document.getElementById('impuesto').innerHTML = "B/00.00";
    }

    total = subtotal + jubilado + impuesto;
    document.getElementById('total').innerHTML = "B/" + total.toFixed(2);
    if (total == 0){
        document.getElementById('total').innerHTML = "B/00.00";
    }
}

function comprar(){
    alert("Su compra ha sido realizada con éxito")
}

function fecha(){
    var meses = new Array 
    ("Enero","Febrero","Marzo",
    "Abril","Mayo","Junio","Julio",
    "Agosto","Septiembre","Octubre",
    "Noviembre","Diciembre");

    var diasSemana = new Array
    ("Domingo","Lunes","Martes",
    "Miércoles","Jueves","Viernes",
    "Sábado");
    
var f=new Date();
document.write(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}