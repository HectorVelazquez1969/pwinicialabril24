const nombre = prompt('ingrese su nombre', );
const edad = parseInt(prompt('ingrese su edad', ));

if (Number.isNaN(edad)) {
  document.write("debes ingresar un numero")
} else if (edad > 18) {
  document.write(`${nombre} que tienes ${edad} años,  puedes conducir`)
} else {
  document.write(`${nombre}, al tener ${edad} años NO PUEDES CONDUCIR`);
}
