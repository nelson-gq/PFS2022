import*as rls from "readline-sync";

const clave : string = "eureka";
let claveIng : string= "";

let i : number = 0;

while(i<3 && claveIng!=clave){
    claveIng = rls.question("Ingrese la Clave: ");
    i++;
}
if(claveIng!=clave){
    console.log("Agoto todas sus oportunidades!");
}