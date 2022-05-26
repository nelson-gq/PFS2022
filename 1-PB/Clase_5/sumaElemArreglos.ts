import*as rls from "readline-sync";

let longitud : number = rls.questionInt("Ingrese la cantidad de numeros a ingresar: ");
let i : number;
let numeros : number [] = new Array(longitud);
let suma : number = 0;
for (i=0; i<longitud; i++){
    numeros[i]= rls.questionFloat("Ingrese un Numero: ");
    suma = suma + numeros[i];
}

console.log("La suma de los numeros ingresados es:", suma);

