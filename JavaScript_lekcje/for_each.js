const imiona = ['Alicja', 'Agnieszka', 'Beata', 'Tomasz', 'Robert', 'Karolina'];
const liczby = [24, 63, 41, 42, 68, 85]
const pusta_tablica = [];

imiona.forEach(imie =>{
    //console.log(imie)
})

console.log(pusta_tablica.forEach(item =>{
    console.log(item)
}))

console.log(pusta_tablica.map(item =>{
    console.log(item)
}))

//Jak będzie tablica pusta, bo coś nam się źle załadowało, to metoda map zwróci pustą tablicę. Jednak metoda for each zwróci 
// undefined

