const h2element = document.querySelector('#band h2')

//function wykonajAlert (){
//    alert ("Udało się kliknąć nagłówek"); //alert informacyjny
//}
 //function wykonajAlert2()//{
    //Alert typu confirm
/*if (confirm("Akceptujesz regulamin? ")){
console.log("Uytkownik zaakceptował regulamin :)")
} else{
    console.log("Uytkownik odrzucił regilamin")
}
}*/

function wykonajAlert3 (){
    const userName= prompt("Jak się nazywasz? \ndhgsfsjsfdhj", "Podaj Imię...") //Interakcja z alertem, wpisujemy jakąś wartość do okienka
    console.log("Uytkownik nazywa się "+userName)
}
   


h2element.addEventListener("click", wykonajAlert3);


