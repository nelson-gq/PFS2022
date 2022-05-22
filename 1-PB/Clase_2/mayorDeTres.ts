import*as rls from "readline-sync";

let num1 : number = rls.question("Ingrese el primer numero: ");
let num2 : number = rls.question("Ingrese el segundo numero: ");
let num3 : number = rls.question("Ingrese el tercer numero: ");

if (num1 > num2 && num1 > num3){
    console.log("El numero " + num1 + " es el mayor!");
} else if (num2 > num1 && num2 > num3){
    console.log("El numero " + num2 + " es el mayor!");
} else{
    console.log("El numero " + num3 + " es el mayor!");
}
