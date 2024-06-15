function getNameDias(mes) {
  //NaN > not a number
  // si no es un numro da falso > en un futuro dira mes invalido
  if (Number.isNaN(mes)) return false;

  if (mes < 1 || mes > 12) return false;

  mes--; // ej 12-------12-1 = posisc 11 (diciembre)

  const data = [
    {
      nombre: "Enero",
      dias: 31,
    },
    {
      nombre: "Febrero",
      dias: 28,
    },
    {
      nombre: "marzo",
      dias: 31,
    },
    {
      nombre: "abril",
      dias: 30,
    },
    {
        nombre: "mayo",
        dias: 30,
      },
    {
      nombre: "junio",
      dias: 31,
    },
    {
      nombre: "julio",
      dias: 30,
    },
    {
      nombre: "Agosto",
      dias: 31,
    },
    {
      nombre: "Septiembre",
      dias: 30,
    },
    {
      nombre: "octubre",
      dias: 31,
    },
    {
      nombre: "noviembre",
      dias: 30,
    },
    {
      nombre: "diciembre", //posicion 11
      dias: 31,
    },
  ];

  return data[mes];
} // cierra la funcion getNameDias

const numMes = parseInt(prompt('Ingrese el mes del año en numeros', ''));
const resultado = getNameDias(numMes);

if (resultado) {
  alert(`El mes ${resultado.nombre} tiene ${resultado.dias} dias`);
} else {
  alert('Mes invalido');
}
