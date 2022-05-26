import*as rls from "readline-sync";

let nombres : string [] = new Array(2);
let numeros : number [] = new Array(3);
let i : number;
console.log("Debe ingresar 2 nombres y 3 numeros");

for(i=0; i<2; i++){
    nombres[i]= rls.question("Ingrese un nombre: ");
}
for(i=0; i<3; i++){
    numeros[i]= rls.questionFloat("Ingrese un numero: ");
}

console.log("Los nombres ingresados son: " + nombres + " y los numeros son: " + numeros);