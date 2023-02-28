//console.log("Cześć")

//Zdarzenie kliknięcie


function showTekst(){
    console.log("Znowu kliknęłam w nagłówek!!!")
}
const h2Band = document.querySelector('div#band h2')
h2Band.addEventListener("click", showTekst);



//h2Band.addEventListener('click',() => {
//console.log("Kliknęłam w nagłówek")
//})

//Słówko this - jest związany z naszym 'p', na którym coś wykonujemy

//const p = document.querySelector('p.w3-justify')
//p.addEventListener("click", function(){  //function znajdzie prezyzyjnie element, który wywołujemy this'em
//    console.log(this)
//})

/*const p = document.querySelector('p.w3-justify')
p.addEventListener("click",() => {
   console.log(this)
})*/ //ona nie widzi naszego paragrafu, przechwytuje jakiś obiekt window, który jest wyzej

//E (Event)
/*const p = document.querySelector('p.w3-justify')
p.addEventListener("click", event => {
    if (event.clientX>500){
        console.log("Wartość jest większa od 500 i wynosi: "+ event.clientX)
    } else {
        console.log("Wartośc jest mniejsza ni 500 i wynosi: "+ event.clientX)
    }
})*/
//mamy informacje, np w którym miejscu kliknęliśmy na dany paragraf, pokazuje precyzyjne dane odnośnie naszego działania


//Mouseover i Mouseout - kiedy dany uytkownik najedzie myszką na nasz przycisk i z niego 'zjedzie'

const buyTicketBTB = document.querySelector('#buy-ticket');
buyTicketBTB.addEventListener("mouseover", ()=> {
    console.log("Zadziało się!")
})


buyTicketBTB.addEventListener("mouseover", e => {
    console.log(e)
})


//prevent default

const form_contact = document.querySelector('form');

form_contact.addEventListener("submit", e =>{
    //e.preventDefault();
    //console.log("test")
})

const link = document.querySelector('div.w3-top div.w3-bar a[href="#contact"]');
link.addEventListener("click", event =>{
    event.preventDefault();
} )

//Keydown, Keyup

const inputName = document.querySelector('input[name="Name"]');

inputName.addEventListener("keydown", e =>{
    console.log("Uruchomiono zdarzenie keydown", e.key)
})

inputName.addEventListener("keyup", () =>{
    console.log("Uruchomiono zdarzenie keyup")
})

//Scroll
window.addEventListener("scroll", e=>{
    //console.log(window.scrollY)
})

//Wykonanie zdarzenia po wczytaniu sie naszego obiektu dom

window.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM wczytał się dokładnie")
})










