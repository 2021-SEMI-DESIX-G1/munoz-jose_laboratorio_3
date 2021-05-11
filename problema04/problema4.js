
const getSumatoriaPrimos = (numero)=>{

    sumatoria = 0;
   

    for(num=0; num<=numero; num++){

        x = 0;
        contador = 0;
        while(x<=num){
            if(num % x == 0){
                contador += 1;
            }
            x +=  1;
        }
        if(contador == 2 | num == 1){
            
            sumatoria += num;
        }  

    }
    return sumatoria;

}

document.querySelector('.btn-calcular').addEventListener('click',function(){
    _numero = document.querySelector('.input-numero').value;
    suma = getSumatoriaPrimos(_numero);
    console.log(`$ La sumatoria de numeros primos es: ${suma}`);
})


