
const getBisiesto = (anio)=>{

    tipoAnio = '';

    if ((anio % 4) === 0){
        tipoAnio = 'Bisiesto';
    }else {
        tipoAnio = 'No Bisiesto';
    }

    return tipoAnio;

}

document.querySelector('.btn-calcular').addEventListener('click',function(){
    year = document.querySelector('.input-cadena').value;
    esBisiesto = getBisiesto(year);
    console.log(esBisiesto);
})