import*as rls from "readline-sync";

let numUsuario : number = rls.questionFloat("Ingrese un numero: ");

if (numUsuario % 2 != 0){
    console.log("El numero es impar");
} else {
    console.log("El numero es par");
}

if (numUsuario == 0){
    console.log("Usted ingreso el 0");
}