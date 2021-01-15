
// MOSTRAR CANTIDAD CUANDO SELECCIONE EL IMPORTE

function mostrar()
{
    document.getElementById("mostrar").style.display ="";
}


// FUNCION PARA CONVERTIR A MONEDAD
const formatterDolar = new Intl.NumberFormat
                    ('en-US', {
                    style: 'currency',
                    currency: 'USD'
     })



var soli = document.getElementById("solicitud");

    

// REALIZAR CALCULO AL INGRESAR VALORES EN LOS INPUTS
soli.addEventListener("input",() =>
{

   // IMPORTE DE CREDITO  
var valora = document.getElementById("valora").value
    

    
// imprimos el valor en el id r      
document.getElementById("r").innerHTML =(formatterDolar.format(valora));
    
    
    
    
 // si no hay un valor capturado entonces es igual a 0
 if (valora=="")
     {
        var valora = 0;
     }

   // MESES   
var valorb = document.getElementById("valorb").value;
    


// TASA DE INTERES TOTAL    
var interes = 3.5 * parseFloat(valorb) ;

// IMPORTE DE  INTERES TOTAL    

var reinteres =  parseFloat(valora)  * interes / 100 ;

// RESULTADO SUMA DE  INTERES TOTAL  + LA CANTIDAD A SOLICITAR  

var resultados = parseFloat(reinteres) + parseFloat(valora) ;

// IMPORTE DE MENSUALIDADES A PAGAR   

var mensualidad =  resultados / valorb;
 
 if (isNaN(mensualidad)) 
{
var mensualidad = 0;
} 
else
{
var mensualidad =  resultados / valorb;
}
    
// si no hay resultado entonces marcar error    


// CAMBIAR VARIABLES A MONEDA    
    
 var result = (resultados.toFixed(2)) ;   
 
 var cmen = (mensualidad.toFixed(2)) ;   
 
 // LLEVAR VARIABLES DE ACUERDO A CADA ID

document.getElementById("resultado").innerHTML = (formatterDolar.format(result))

document.getElementById("meses").innerHTML = valorb
    
document.getElementById("mensualidades").innerHTML = (formatterDolar.format(cmen))    


if (valora=="")
{

   document.getElementById("info").style.display = "none";
}
else
{
   document.getElementById("info").style.display = "inline";
}
    
    
}
)







