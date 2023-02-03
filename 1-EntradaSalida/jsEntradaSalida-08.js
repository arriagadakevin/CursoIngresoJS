/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    let dividendo;
	let divisor ;
	let resultado;

	dividendo = txtIdNumeroDividendo.value;
	divisor = txtIdNumeroDivisor.value;
    
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);
	resto = (dividendo % divisor);

    txtIdResultado
	alert("el resto es " +  resto );
}
/*para numeros decimales se usa parsefloat*/