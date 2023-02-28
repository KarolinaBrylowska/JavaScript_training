const plec = "robot"; //mezczyzna, kobieta, robot
const wiek = 35;
const zwierzeta = "Kot";

if(plec=="kobieta") {
    console.log("Hej, wiem, ze jesteś kobietą")
} 
else if(plec=="robot") {
    console.log("hej, wiem, ze jestes robotem!")
}
else {
    console.log("Hej, wiem, ze  jesteś mezczyzną!")
}

//Jeśli wiek >30 i osoba będzie posiadała zwierzę pies wyświetl komunikat

if (wiek>30 && zwierzeta=="pies") {
    console.log("Masz ponad 30 lat i masz psa. Warunek spełniony")
}
else {
    console.log("nie spełniasz warunku");
}
if (wiek>30 || zwierzeta=="pies") {
    console.log("Masz ponad 30 lat i masz psa. Warunek spełniony")
}
else {
    console.log("nie spełniasz warunku");
}
