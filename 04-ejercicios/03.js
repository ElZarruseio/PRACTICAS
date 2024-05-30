function getByIdx(arr, idx) {
if(idx < 0 ||arr.length <= idx){ //Se valida que el indice no sea 0
                                // y que nos muestre el numero ubicado en el indice indicado
                                
                            
    return 'Elemento invalido';
}

return arr[idx];
}

let resultado = getByIdx([1, 2], 1);
console.log (resultado);

