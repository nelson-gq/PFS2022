import*as rls from "readline-sync";

let sueldoActual : number = rls.questionFloat("Ingrese su Sueldo Actual: $");
let sueldoConAumento : number;

if (sueldoActual <= 15000){
    sueldoConAumento = sueldoActual*0.2 + sueldoActual;
    console.log("Usted accede a un aumento del 20 %, el total a cobrar sera: $" + sueldoConAumento);
} else if (sueldoActual > 15000 && sueldoActual <= 20000){
    sueldoConAumento = sueldoActual*0.1 + sueldoActual;
    console.log("Usted accede a un aumento del 10 %, el total a cobrar sera: $" + sueldoConAumento);
} else if (sueldoActual > 20000 && sueldoActual <= 25000){
    sueldoConAumento = sueldoActual*0.05 + sueldoActual;
    console.log("Usted accede a un aumento del 5 %, el total a cobrar sera de: $" + sueldoConAumento);
} else {
    console.log("Su sueldo es superior a $ 25000, no posee aumento!");
}
