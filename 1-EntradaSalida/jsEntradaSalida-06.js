/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let dato1;
	let dato2;
	let suma;

	dato1 = txtIdNumeroUno.value;
	dato2 = txtIdNumeroDos.value;

	dato1 = parseInt(dato1);
    dato2 = parseInt(dato2);
    
	suma = dato1 + dato2
	
    alert("la suma es " + suma);

}

