var valorEmGrauFahrenheit = 0;
var valorEmGrauCelsius = 0;

valorEmGrauFahrenheit = prompt('Qual é o valor em Grau Fahrenheit ?');

function Conversor(){
        valorEmGrauCelsius = (valorEmGrauFahrenheit - 32) * (5 / 9);
        return  valorEmGrauCelsius + ' Grau Celsuis ' ;
} 
console.log(Conversor());
