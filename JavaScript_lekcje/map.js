const imiona = ['Alicja', 'Agnieszka', 'Beata', 'Tomasz', 'Robert', 'Karolina'];
const liczby = [24, 63, 41, 42, 68, 85]
let dziewczyny = [];
let chlopaki = [];


imiona.map(imie => {
    if(imie[imie.length -1] == 'a'){
        dziewczyny.push(imie)
    }
    else { 
        chlopaki.push(imie)
    }
})
console.log(dziewczyny)
console.log(chlopaki)



//Wykorzystanie metody MAP w praktyce - to jest taka pętla dla naszej tablicy, zwraca argumenty z tablicy

//liczby.map((liczba, index) => { //tam mamy w nawiasach parametr - on zawsze jest związany z liczbą, aby ta 
    //wartość sie iterowała, więc nazwalśmy ten parametr liczba. Druga wartość określa nam indeks : (x(parametr), y(indeks))
    /*if (liczba > 41){
        console.log(`Liczba ${liczba} jest większa od 41.`)
    } else {
        console.log(`Liczba ${liczba} jest mniejsza od 41.`)
    }*/
    //console.log(`${liczba} kryje się pod indeksem ${index}`);
//})

