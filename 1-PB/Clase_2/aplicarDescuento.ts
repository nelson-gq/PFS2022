import*as rls from "readline-sync";
let producto : number = 180;

console.log("El precio del producto es de $ 180 ");

let cantidad : number = rls.questionInt("Ingrese la Cantidad de productos que desea llevar: ");

let total : number = cantidad*producto;

if(total>1000){
    let descuento : number = total*0.1;
    let prepcioConDescuento : number = total-descuento;
    console.log("Usted accede a un descuento del 10% por lo tanto el total a pagar es de: $" + prepcioConDescuento);
} else {
    console.log("El total de su compra es de: $" + total);
}