// Solicitar al usuario su nombre y edad
const nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");
// Validar que la edad ingresada sea un número
while (isNaN(edad)) {
    console.log("por favor ingresa un numero valido para tu edad.");
    edad = prompt("¿Cuál es tu edad?");
}
// Convertir la edad a un número entero
if (edad < 18) {
    console.log(`Hola` + nombre `eres menor de edad sigue aprendiendo y disfrutando del codigo.`);
}
// Si el usuario es mayor de edad, mostrar un mensaje de bienvenida
else (edad >= 18); {
    console.log(`Hola` + nombre `, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!` );
}
