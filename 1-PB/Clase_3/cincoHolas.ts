let cantHolas : number = 1;
while (cantHolas <= 5){
    console.log("Hola");
    cantHolas = cantHolas + 1;
}

import*as rls from "readline-sync";
/*
let nota, suma, promedio, contador : number;

contador = 1;

suma = 0; 

while (contador <= 10){
    nota = rls.questionFloat("Ingrese la nota " + contador + ":");
    contador = contador + 1;
    suma = nota + suma; 
    promedio = suma/10;

}
console.log("El promedio es " + promedio);

*/ 
let nota, suma, promedio, contador : number;
suma = 0;
for (contador = 1; contador <= 10; contador++) {
    nota = rls.questionFloat("Ingrese la nota Nro " + contador + ": ");
    suma= nota + suma;
    promedio= suma/10;
       
}
console.log("Su promedio es "+ promedio);


