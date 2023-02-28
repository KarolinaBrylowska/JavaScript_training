class PierwszaKlasa {
    pierwsza(){
        return "Pierwsza klasa";
    }
}

class DrugaKlasa extends PierwszaKlasa{
    druga() {
        return "Druga klasa";
    }
}

const obiekt1 = new PierwszaKlasa();
const obiekt2 = new DrugaKlasa();


console.log(obiekt1.pierwsza());
console.log(obiekt2.pierwsza());
