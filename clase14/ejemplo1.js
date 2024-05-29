const nombre = prompt('ingrese su nombre', '')
const nota = parseInt(prompt('ingrese su nota', ' '));

 if(Number.isNaN(nota)) {
    document.write('la nota ingresada no es valida')
    
} else if (nota>=4){
    document.write(`${nombre} estas aprobado/a con un ${nota}`);
    console.log(`${nombre} estas aprobado/a con un ${nota}`);
}
else  {
    document.write(`${nombre} estas desaprobado/a con un ${nota}`);
    console.log(`${nombre} estas desaprobado/a con un ${nota}`)
    
}