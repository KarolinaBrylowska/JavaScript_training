const pi = Math.PI;
const pierwiastek2 = Math.SQRT1_2;
const log2 = Math.LN2; //logarytm naturalny z 2
const log10 = Math.LN10; //logarytm naturalny z 10
const zaokraglenie1 = Math.round(log10) //do najblizszej liczby całkowitej
const zaokraglenie2 = Math.ceil(1.1)// do najblizszej liczby całkowitej w gore
const zaokraglenie3 = Math.floor(2.6) //do najblizszej liczby całkowitej w dół
const zaokraglenie4 = Math.trunc(5.7382466) //zwraca częśći całkowite
const zaokraglenie5 = Math.sign(86127823) //ujemna = -1, 0=0, dodatnia = 1;
const zaokraglenie6 = Math.pow(2,4) //potęgowanie liczb 2^4
const zaokraglenie7 = Math.sqrt(64) //pierwiastek kwadratowy z liczby
const zaokraglenie8 = Math.abs(-10) //zwraca wartosc bezwzgledną dodatnią
const min = Math.min(13,15,63,324,85); //zwraca minimalną z danego zbioru liczb
const max = Math.max(13,15,63,324,85); //zwraca wartośc maksymalną

//Losowanie liczb
const losowanie = Math.floor((Math.random()*(max-min)+min));






console.log(losowanie);
