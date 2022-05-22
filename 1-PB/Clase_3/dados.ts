import*as rls from "readline-sync";

console.log("Bienvenidos, a continuacion vamos a calcular las probabilidades de que salgan solo 6 en la cantidad de dados que usted desee");

let cantDados : number = rls.questionInt("Ingrese la cantidad de dados a tirar: ");
let probabilidades : number;
if(cantDados>=1){
    probabilidades = 6**cantDados;
    console.log("Las probabilidad de sacar solamente 6 es de 1/" + probabilidades + " con " + cantDados + " dados.");
} else{
    console.log("El numero ingresado no es correcto, debe ser un numero entero positivo!!");
}
