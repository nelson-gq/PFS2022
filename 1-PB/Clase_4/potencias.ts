import*as rls from "readline-sync";
let base, exponente : number; 

function calcularPotencia(base,exponente){
    base = rls.questionInt("Ingrese la base: ");
    exponente= rls.questionInt("Ingrese el exponente: ");
    while(exponente<0){
        exponente = rls.questionInt("Ingrese un numero mayor a cero: ");
    }
    return base**exponente;
}

console.log("El resultado es: ", calcularPotencia(base,exponente));
