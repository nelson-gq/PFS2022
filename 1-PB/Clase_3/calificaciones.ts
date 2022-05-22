import*as rls from "readline-sync";

let alumno : string = rls.question("Ingrese el nombre del alumno: ");
let calificacion : number; 

while(alumno != ""){
    let nota1 : number = rls.questionFloat("Ingrese la calificacion de Practica: ");
    let nota2 : number = rls.questionFloat("Ingrese la calificacion de Ejercicios: ");
    let nota3 : number = rls.questionFloat("Ingrese la calificacion de Teoria: ");
    if((nota1<=10 &&nota1>=0) && (nota2<=10 && nota2>=0) && (nota3<=10 && nota3>=0)){
        calificacion = nota1*0.1 + nota2*0.5 + nota3*0.4;
        console.log("La calificacion del " + alumno + " es de " + calificacion);
    } else {
        console.log("Las notas ingresadas son incorrectas");
    }
    alumno = rls.question("Ingrese el nombre del alumno: ");
    
}

