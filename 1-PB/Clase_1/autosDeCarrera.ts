import*as rls from "readline-sync";

let piloto : string = rls.question("Ingrese el nombre del Piloto : ")

let vuelta1 : number = rls.questionFloat("Ingrese el tiempo de la primer vuelta en segundos: ");
let vuelta2 : number = rls.questionFloat("Ingrese el tiempo de la segunda vuelta en segundos: ");
let vuelta3 : number = rls.questionFloat("Ingrese el tiempo de la tercer vuelta en segundos: ");
let vuelta4 : number = rls.questionFloat("Ingrese el tiempo de la cuarta vuelta en segundos: ");

let tiempoTotal : number = vuelta1+vuelta2+vuelta3+vuelta4;

let promedioDeVuelta: number = tiempoTotal/4;

console.log("El piloto " + piloto + " tiene un tiempo total de " + tiempoTotal + " segundos");
console.log("Con un promedio de " + promedioDeVuelta + " segundos por vuelta");


