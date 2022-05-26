import*as rls from "readline-sync";

let a : number = rls.questionFloat("Ingrese un dividendo: ");
let b : number = rls.questionFloat("Ingrese un divisor: ");

function esMultiplo(a,b): boolean{
    return a%b == 0;
}


console.log(esMultiplo(a,b));
