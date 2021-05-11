

const verificarPalindromo = (cadena)=>{

    let acumulador =0;
    let tipo='';

    for(let i=0;i<cadena.length;i++){
        
        let cd = cadena.charAt(i);
        let ci = cadena.charAt(cadena.length-i-1);

        if(ci ==cd){
            acumulador +=1;
        }
    }

    if(acumulador === cadena.length){
        tipo = 'Palindromo';
    }else{
        tipo = 'No es Palindromo';
    }

 
    return tipo;

}

const obtenerBinario=(numero)=>{

    let binario = '';
    let residuo =0;

    while(numero>0){
        residuo=numero%2;
        binario=binario + String(residuo);
        numero=Math.floor(numero/2);

    }
    return binario;
}


document.querySelector('.btn-calcular').addEventListener('click',function(){
    _cadena = document.querySelector('.input-cadena').value;
    console.log(_cadena);

    // Transformar cadena a numero
    //let numero = parseInt(cadena);
    //console.log(numero);

    //Evaluar Palindromo
    tipoCadena = '';
    tipoCadena = verificarPalindromo(_cadena);
    console.log(tipoCadena);


    if(tipoCadena === 'Palindromo'){

        numeroBinario = obtenerBinario(parseInt(_cadena));

        tipoBinario = verificarPalindromo(numeroBinario);

        if (tipoBinario === 'Palindromo'){
            console.log(`${_cadena} es Palindromo de doble base.`)
            //App.htmlElements.resultadoInput.innerHTML =`${numero} es Palindromo de Base Doble.`;
        }
        else {
         console.log(`${_cadena} es Palindromo.`)
         //App.htmlElements.resultadoInput.innerHTML = `${numero} es Palindromo.`;
        }

     }




})

