const num1= parseInt(prompt('ingrese el primer numero','')); //150
const num2= parseInt(prompt('ingrese el segundo numero','')); //89
const num3= parseInt(prompt('ingrese el tercero numero','')); //56

console.log(num1, num2, num3)

if (num1>num2 && num1 > num3) {
    document.write('el mayor es ${num1}');}
 else if (num2>num3) {document.write('el mayor es ${num3}');}
 else{document.write('el mayor es ${num3}')};
      
    

