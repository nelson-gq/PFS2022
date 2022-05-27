import*as rls from "readline-sync";

let longitud : number = rls.questionInt("Ingrese la cantidad de nombres a ingresar: ");
let i : number;

let nombresDeseados : string [] = new Array(longitud);
for (i=0; i<longitud; i++){
    nombresDeseados[i]= rls.question("Ingrese un Nombre: ");
}
console.log("Los nombres ingresados son los siguientes:  " + nombresDeseados);

