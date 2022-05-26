import*as rls from "readline-sync";

let vector1 : number [] = new Array (6);
let vector2 : number [] = new Array (6);
let vectorSuma : number [] = new Array (6);
let i : number; 

for (i=0; i<6; i++){
    vector1[i] = rls.questionFloat("Ingrese un numero para la primer lista: ");
}

for (i=0; i<6; i++){
    vector2[i] = rls.questionFloat("Ingrese un numero para la segunda lista: ");
}

for (i=0; i<6; i++){
    vectorSuma[i] = vector1[i] + vector2[i];
}

console.log("La resultado de la suma de ambas listas es: " + vectorSuma);

