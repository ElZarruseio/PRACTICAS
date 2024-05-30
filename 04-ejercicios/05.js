let array = [2, 5, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = [0]; //se le asigna el valor ubicado en la posicion 0
    let mayor = [0];// del array a cada variable o sea ambas valen 2

    for (numero of arr) { // se recorre comparando cada elemento 
                          // con el valor asiganado a las variables
        menor = menor < numero ? menor : numero; // se le asgina el numero de menor valor que se encuentre en el array  comparando elemento por elemento
        mayor = mayor > numero  ? mayor : numero;//se le asgina el numero de mayor valor que se encuentre en el array  comparando elemento por elemento
        
    }
    
    return [menor, mayor] // se retorna los valores asiganados a cada variable dentro de un array.
}

let numeros = getMenorMayor(array)
console.log(numeros);