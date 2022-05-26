let numAleatorios : number [] = new Array(10);
let i: number;
function Azar():number{
    let nro : number = Math.floor(Math.random()*100);
    return nro;
}

for (i=0; i<10; i++){
    numAleatorios[i] = Azar();
}

console.log("Los numeros generados al azar son: " + numAleatorios)