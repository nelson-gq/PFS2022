import*as rls from "readline-sync";

let llegadaColectivo: string;

console.log("Esperando el Colectivo");
llegadaColectivo = rls.question("Llego el Colectivo? Y/N: ");

while( llegadaColectivo == "N"){
    console.log("Esperando el Colectivo");
    llegadaColectivo = rls.question("Llego el Colectivo? Y/N: ");
}
console.log("El Colectivo LLEGO!");
