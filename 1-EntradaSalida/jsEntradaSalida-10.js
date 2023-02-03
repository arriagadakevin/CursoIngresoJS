/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe 
	let resultado 
	let descuento
     
	importe = txtIdImporte.value;
	importe = parseFloat(importe);
	
	resultado = (importe * 25/100 );
    resultado = parseFloat(resultado);

	descuento = (importe - resultado);

    txtIdResultado.value = (descuento.toFixed(2));



	
}
