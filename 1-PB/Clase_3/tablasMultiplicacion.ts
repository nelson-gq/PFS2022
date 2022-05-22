import*as rls from "readline-sync";

let numTabla : number = rls.questionInt("Ingrese el Nro del cual desea saber su tabla de multiplicar: ");

let numLim : number = rls.questionInt("Hasta cual Nro desea multiplicar?: ");
let index : number;

for(index=0; index<=numLim; index++){
    console.log(numTabla + " x " + index + " = " + numTabla*index);
}