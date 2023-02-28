let licznik = 0; //licznik zaczyna się od 0, ale mamy zwiększyć jego wartośc inkrementacją, więc id będzie 8 : 0, 1, 2, 3, 4, 5, 6, 7 - na 8 sie zakończy


function wyswietl_tekst(){
    
    if(licznik++ && licznik == 8){ //tu mamy, ze jesli licznik inkrementuje i osiągnie wartość 8 to zatrzymaj interwał. 
        clearInterval(start);
        }
        console.log("Wartość testowa") //do tego momentu wyświetlaj "Wartość testowa"
    }


const start = setInterval(wyswietl_tekst, 200);

