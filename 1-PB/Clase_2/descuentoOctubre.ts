import*as rls from "readline-sync";

let precioUnitario : number = rls.questionFloat("Ingrese el precio unitario: $"); 
let cantidad : number = rls.questionFloat("Ingrese la cantidad: ");
let mes : string = rls.question("Ingrese el mes: ");

let total : number = precioUnitario*cantidad;

if (mes == "10" || mes.toLowerCase() == "octubre"){
    let totalConDesc : number = total - total*0.15;
    console.log("Usted tiene descuento del 15 % por este mes, el total a pagar es: $" + totalConDesc);
} else {
    console.log("El total a pagar es: $" + total);
}

