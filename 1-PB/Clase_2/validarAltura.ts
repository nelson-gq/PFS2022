import*as rls from "readline-sync";

let altura : number = rls.question("Ingrese su altura en mts: ");


if (altura>= 1.30){
    console.log("Puede ingresar al juego");
} else{
    console.log("No puede ingresar al juego");
}