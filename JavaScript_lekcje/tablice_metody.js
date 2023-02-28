const tablica = ["Klaudia", 2, 5.35, true, {name: "Tomasz", age: 24}]
const liczby = [1, 6, 4, 9, 2, 4]
const imiona = ["Rafal", "Krzysztof", "Blanka", "Karolina", "Tomasz", "Wojtek"]

//weryfikacja długości tablicy

//console.log(tablica.length)
//console.log(liczby.length)

//dodawanie elementów do tablicy na sam koniec

tablica.push("Wojtek")
//console.log(tablica)

//usuwanie elementu z końca tablicy

tablica.pop();
liczby.pop();
//console.log(tablica)
//console.log(liczby)

//usuwanie elementu z początku tablicy

tablica.shift();
liczby.shift();
//console.log(tablica);
//console.log(liczby);

//znajdowanie elementu z tablicy po jej watrości

const indexElement = liczby.indexOf(6)
//console.log(indexElement)

// Usuwanie elementu z tablicy (dowolnego)

liczby.splice(indexElement, 2)
//console.log(liczby)

//Przekształcanie tablicy liczbowej na string
const string = liczby.join(" ");
console.log(string);
console.log(typeof(string));
//const stringImiona = imiona.join("-")
//console.log(stringImiona);

//Odwrócenie tablicy

//imiona.reverse();
//console.log(imiona);

//Sortowanie Tablicy

imiona.sort();
//console.log(imiona);

//łączenie tablic

const super_tablica = liczby.concat(imiona);
console.log(super_tablica);



