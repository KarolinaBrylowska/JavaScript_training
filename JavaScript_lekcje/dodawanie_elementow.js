//Tworzenie nowego elementu
const form = document.querySelector('form')
const boxBand = document.querySelector('div#band')

const divElement = document.createElement("div");


divElement.style.width = "100px"
divElement.style.height = "100px"
divElement.style.backgroundColor = "red"

const p = document.createElement("p")
p.innerText = "Nowy super paragraf!"

console.log(divElement);
console.log(p)

//Wstawianie elementu do HTML 

form.appendChild(divElement);
boxBand.appendChild(p);

