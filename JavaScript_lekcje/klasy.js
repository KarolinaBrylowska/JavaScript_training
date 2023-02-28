//Tworzenie nowego elementu

const boxBand = document.querySelector('div#band') //pobieramy sobie diva z klasą band
const link = document.createElement('a') //tworzymy link





const p = document.createElement("p") //tworzymy paragraf
p.innerText = "Nowy super paragraf!" //dodajemy tekst do paragrafu
link.innerText = "Przekierowanie do Google.com"; //dodajemy tekst do linku, który utworzyliśmy wyej




p.classList.add("active"); //dodajemy klasę do paragrafu
p.classList.add("active2"); // dodajemy kolejną klasę do paragrafu

link.setAttribute("href", "https://google.com"); //przypisujemy do linka atrybut href - czyli prawdziwy link
link.removeAttribute("href"); // usuwamy atrybut href - więc usuwamy to bezpośrednie przekierowanie do Googla

link.id = "super-link"; //dodanie id do linku

p.classList.remove("active"); //usunięcie jednej z wcześniej utworzonych klas

boxBand.appendChild(p); //przypisanie tego paragrafu jako dziecko klasy boxBand
boxBand.appendChild(link); //przypisanie linku jako dziecka klasy boxBand

