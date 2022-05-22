import*as rls from "readline-sync";

let numUsuario : number = rls.questionInt("Ingrese un numero entero positivo: ");
let contador : number = 0;
/*
if (numUsuario <= 0){
    console.log("Ingrese un numero mayor a 0: ");
} else if(numUsuario % 2 != 0){
    console.log("El numero es Impar");
} else{
    console.log("El numero es Par");
}
*/ 

while(numUsuario<=0){
    numUsuario = rls.questionInt("Ingrese un numero mayor a cero!! : ");
}

if(numUsuario % 2 ==0){
    console.log("El numero es Par");
} else{
    console.log("El numero es Impar");
}

