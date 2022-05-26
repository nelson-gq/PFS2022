import * as rls from "readline-sync";

function esMultiplo(numIng, div): boolean{
    return numIng%div == 0;
}

function contarDiv (numIng : number): number {
    let cant : number = 0;
    let div : number;
    for (div = 1; div <= numIng; div++) {
    if (esMultiplo (numIng, div)) {
        cant++;
        }
    }
    return cant;
}
    
let numIng : number = rls.questionInt("Ingrese el Nro para saber la cantidad de divisores del mismo: ");
let cantDiv : number = contarDiv(numIng);

console.log("El número " + numIng + " tiene " + cantDiv + " divisores.");

