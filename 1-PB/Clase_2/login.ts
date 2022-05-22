import*as rls from "readline-sync";
let user : string = "Juan";
let password : string = "claveJuan";

console.log("Bienvenido");

let userIngresado : string = rls.question("Ingrese su Usuario: ");
let passIngresada : string = rls.question("Ingrese su contraseña: ", {
    hideEchoBack: true 
  });

if (user.toUpperCase() === userIngresado.toUpperCase() && password === passIngresada){
    console.log("Bienvenido " + user);
} else {
    console.log("El usuario o contraseña son incorrectos, intente nuevamente");
}
