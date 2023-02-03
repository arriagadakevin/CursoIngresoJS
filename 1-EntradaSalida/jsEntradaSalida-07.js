/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	
	alert("El resultado de la suma es " + (numero1 + numero2) );
}

function restar()
{
	let numero1;
	let numero2;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	alert("El resultado de la resta es " + (numero1 - numero2) );
}

function multiplicar()
{  
	let numero1 
	let numero2 
	
	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	alert("El resultado de la multiplicacion es " + (numero1 * numero2) );
}

function dividir()
{
	let numero1;
	let numero2;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	alert("El resultado de la division es " + (numero1 / numero2) );
	
}

