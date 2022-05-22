import*as rls from "readline-sync";

let ingresos : boolean = false;
let numIng : number= rls.questionFloat("Ingrese un numero: ");
let max : number = numIng;

while(numIng != 0){
    ingresos =true; 
    if(numIng>max){
        max=numIng;
    }
    numIng = rls.questionFloat("Ingrese un numero: ");
}

if (ingresos){
    console.log("El maximo es " + max);
}