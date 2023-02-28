//pierwszy sposob :
function wyswietl_tekst() {
    console.log("Przykładowy tekst z funkcji")
}
wyswietl_tekst();

// drugi sposób
const wyswietl_tekst2 = function() {
console.log("Przykładowy tekst z funkcji 2 :) ")
}
wyswietl_tekst2();

// trzeci sposób deklarowania funkcji

const wyswietl_tekst3 = () => {
    console.log("Przykładowy tekst z funkcji 3 :) ")
}
wyswietl_tekst3();

/*const imie= "Tomek";
const wiek = 35 ;
const zwierze = "Kot";
function zwroc_tekst(){
    if(imie=="alicja"){
        console.log("Imie to Alicja");
}
else {
    console.log("Dostep zabroniony!")
}
}
zwroc_tekst();*/

//Parametry w funkcji
//let pierwsza_liczba = 1;
//let druga_liczba = 2;
//let suma;
//let wynik;

//function dodawanie_liczb(pierwsza, druga, imie){
   // console.log("Wynik: "+Number(pierwsza+druga)+ " "+imie); // określamy zwracaną wartość
    //console.log(`Wynik: ${imie} ma obecnie ${Number(pierwsza+druga)} lat.`) // łatwiejsze przedstawienie zwracanej wartości
    //console.log("test") //to, co jest przed return bez problemu się wykonuje
    //return `Wynik: ${imie} ma obecnie ${Number(pierwsza+druga)} lat.` // jest komenda kończąca, adna z komend po return się nie wykona
    
//}
//wynik = dodawanie_liczb(30,12, "Kazik");

//console.log(wynik);

//if (wynik>60){
    //console.log("Wartość większa niz 60")
//}
//else {
 //   console.log("Wartosc mniejsza niz 60")
//}
function odejmowanie_liczby(pierwsza_liczba, druga_liczba){
return pierwsza_liczba-druga_liczba
}
function dodawanie_liczb (pierwsza, druga){
    const wynik_odejmowania = odejmowanie_liczby(5,1)
    return pierwsza+ druga + wynik_odejmowania;
};
console.log(dodawanie_liczb(100,100))
;










