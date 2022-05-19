import*as readlineSync from "readline-sync";


let peso : number = readlineSync.questionFloat("Ingrese el Peso: ");
let altura : number = readlineSync.questionFloat("Ingrese su altura en metros: ");   
  let IMC : number = peso/(altura*altura);

function resultado (){
    if  (IMC < 18){
        console.log("Su IMC es: " + IMC + " esta en bajo nivel de peso")
    }else if (IMC > 18 && IMC < 25){
        console.log("Su IMC es: " + IMC + " esta con Peso Normal")
    }else if (IMC >= 25 && IMC < 30){
        console.log("Su IMC es: " + IMC + " esta con Sobrepeso")
    }else if (IMC >= 30 && IMC < 35){
        console.log("Su IMC es: " + IMC + " esta con Obesidad Tipo I")
    }else if (IMC >= 35 && IMC < 40){
        console.log("Su IMC es: " + IMC + " esta con Obesidad Tipo II")
    }else if(IMC >= 40){
        console.log("Su IMC es: " + IMC + " esta con Obesidad Tipo III")
    }
}
resultado(); 
