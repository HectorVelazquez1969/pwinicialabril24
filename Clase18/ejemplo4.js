let a,b,c;

[a,b] = [10,20]
console.log(a);
console.log(b);

[a,b,...resto] = [10,20,30,40,50]
console.log(resto);//va a imprimir 30,40 y 50

const vocales = ['a', 'e', 'i'];

const vocalesCompletas = [...vocales , 'o', 'u'];
console.log(vocalesCompletas);// va a imprimir a e i o u