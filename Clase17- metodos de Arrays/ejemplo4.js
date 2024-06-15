const frutas = ['palta', 'sandia', 'bananas', 'manzanas']

//console.log(frutas)

console.log(frutas.sort())

console.frutasordenadas = frutas.sort();

//console.log(frutasordenadas); a a la z

const frutasordenadasres = frutas.sort().reverse();

console.log(frutasordenadasres);// za la a


const numeros = [ 3, 28, 13, 14, 51]

//console.log(numeros)

//console.log(numeros.sort())

const numerosordenadosreves = numeros.sort(function (a, b){
    return b - a
})

console.log(numerosordenadosreves);

