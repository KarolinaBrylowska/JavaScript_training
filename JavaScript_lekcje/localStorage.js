//Zapisywanie do localStorage

localStorage.setItem("Title", "Super Gra");
localStorage.setItem("Score", "24");
localStorage.setItem("Name", "Steve");
localStorage.setItem("Rank", "Silver");
//odczytywanie z localStorage

//const titleGame = localStorage.getItem("Title");
//console.log(titleGame);

//usuwanie elementów pojedynczych z localStorage
//localStorage.removeItem("Title");

//usuwanie wszystkiego z localStorage
if(confirm("Czy chcesz usunąć tą rzecz z LocalStorage? ")){
    localStorage.clear();
    alert("Udało się wyczyścić dane")
} else {
    alert("Nie udało się wyczyścić danych")
}

//localStorage.clear();


