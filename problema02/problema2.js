const contarLetras = (cadena)=>{

    caracteres = {};
    for(let i=0; i<cadena.length;i++){
        if(caracteres[cadena[i]]){
            caracteres[cadena[i]]++;
        } else{
            caracteres[cadena[i]] = 1;
        }
    }
    return caracteres;

}


document.querySelector('.btn-calcular').addEventListener('click',function(){
    texto = document.querySelector('.input-cadena').value;
    letras = JSON.stringify(contarLetras(texto));
    console.log(letras);
})