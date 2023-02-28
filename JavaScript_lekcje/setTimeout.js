/*function wyswietl_tekst (){
    console.log("Tomasz")
}
setTimeout(wyswietl_tekst, 5000); //kaze poczekać określoną ilość czasu, aby zwrócić wartość 
*/

const h2element = document.querySelector('#band h2'); //pobieramy element ze strony
const colours = ["blue", "red", "yellow", "green", "pink"]; //tworzymy tablicę z lkolorami


function changeColor(){ //tworzymy funkcję losującą
    const random_value = Math.floor(Math.random() * ((colours.length - 1) - 0)) + 0; //to nam losuje dowolną liczbę z przedziału od długości tablicy colours
   h2element.style.color = colours[random_value] //uzalenia wylosowaną liczbę od koloru, który znajduje sie pod tym indeksem w tablicy
}

h2element.addEventListener("click", function() { //nasłuchujemy wydarzenia kliknięcia w pobrany przez nas element
    setTimeout(changeColor, 3000); //ustawiamy sobie aby poczekał ze zmianą koloru 3 sekundy
}) //gotowe!
