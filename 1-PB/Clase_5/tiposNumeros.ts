import*as rls from "readline-sync";
let length : number = rls.questionInt("Ingrese la cantidad de numeros a ingresar: ");
let i : number;
let neg : number = 0;
let pos : number = 0;
let ceros : number = 0;
let tiposNros : number[] = new Array(length);

for(i=0; i<length; i++){
    tiposNros[i] = rls.questionFloat("Ingrese un numero: ");
    if(tiposNros[i] < 0){
        neg++
    } else if(tiposNros[i] > 0){
        pos++
    } else if(tiposNros[i] == 0){
        ceros++
    }
}


console.log("De su lista " + pos + " son positivos, " + neg + " son negativos y hay " + ceros + " ceros");

