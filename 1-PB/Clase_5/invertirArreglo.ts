import*as rls from "readline-sync";
let length : number = rls.questionInt("Ingrese la cantidad de numeros a ingresar: ");
let i : number;
let inversion : number[] = new Array(length);

for(i=0; i<length; i++){
    inversion[i] = rls.questionFloat("Ingrese un numero: ");
}

console.log("Invirtiendo el orden, el resultado es este: " + inversion.reverse());




