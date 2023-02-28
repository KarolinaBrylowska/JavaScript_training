//Pierwszy sposób pobierania elementów za pomocą query selector

const h2band = document.querySelector('div#band h2.w3-wide');
//console.log(h2band);

const bandBox = document.querySelector('div#band');
//console.log(bandBox);

const footer = document.querySelector('footer i:nth-child(3)');
//console.log(footer);

//Drugi sposób pobierania elementów querySelector all

const div = document.querySelectorAll('div');
//console.log(div);

//Trzeci sposób pobierania elementów po samej klasie getElementByClassName

const klasa = document.getElementsByClassName('special');
//console.log(klasa)

//Czwarty sposób pobierania elementów getElementById

const id = document.getElementById('navDemo')
//console.log(id)

//Piąty sposób, pobieranie po znaczniku

const imgElement = document.getElementsByTagName("img");
console.log(imgElement);


