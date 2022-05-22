
let i : number;
let cadena : string = "";

for(i=1; i<=100; i++){
    if(i%2 == 0 || i%3 == 0){
        cadena = cadena + " " + i  + " ";
    }
}
console.log(cadena);
