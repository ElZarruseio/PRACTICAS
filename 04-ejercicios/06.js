// cuantos positivos hay en un array

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let contador = 0;
    for (elemento of arr) { // recorre cada elemento del array 
       

        if(elemento > 0){ //si el elemento del array
                          // es mayor a 0 aumenta el contador
            contador++;
        }

    }
    return contador; // devuelve del valor final de contador
}

let resultado = cuantosPositivos(array); // se guarda el valor retornado en la fuccion 
                                        // en la variable resultado 
console.log(resultado)