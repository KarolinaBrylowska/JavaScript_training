const p = document.querySelector('p.w3-justify')
const value = p.innerText; //property - właściwość - zapisuję do zmiennej value tekst ze zmiennej p
const h2band = document.querySelector('div#band h2')
const pWeLoveMusic = document.querySelector('p.w3-opacity');
const image = document.querySelector('img.w3-image')

//console.log(value);
//console.log(h2band.innerText); //innerTekst słuy te do przypisania wartosci, poz naku = . Jednak jeśli nie ma tego znaku słuzy do odczytu zawartości nagłówka, paragrafu, itd. 

//console.log(pWeLoveMusic.innerHTML); 

//console.log(image.getAttribute("src"))

//console.log(image.style.width)


//pobieranie tekstu z dynamicznych elementów - input
const inputName = document.querySelector('input[name="Name"]'); //pobieramy inputa ze stronki 
//console.log(inputName.value);

inputName.addEventListener("keydown", ()=>{
    console.log(inputName.value)
})

inputName.addEventListener("keyup", ()=>{ //add event listener czyli nasłuchujemy jakiegoś wydarzenie, w tym przypadku uzupełniania inputa Imię
    console.log(inputName.value)
}) //uzywamy keyup, poniewaz ma nam zwrócić te wartość ostatniej literki, którą naciśniemy czyli całe imię

