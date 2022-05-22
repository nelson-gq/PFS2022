import*as rls from "readline-sync";

console.log("A continuacion sumaremos todos los numeros que haya entre dos que usted ingrese");

let num1 : number = rls.questionInt("Ingrese el primer numero: ");
let num2 : number = rls.questionInt("Ingrese el segundo numero: ");
let suma : number = 0
let i : number;

if(num1 < num2){
    i = num1; 
} else {
    i = num2;
}

while(i <= num2 || i <= num1){
    suma = suma + i;
    i++
}
console.log("La suma entre " + num1 + " y " + num2 + " es: " + suma);
