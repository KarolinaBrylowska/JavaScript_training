class Car {
    constructor(marka, model, rocznik, kolor){
        this.markaSamochodu = marka;
        this.modelSamochodu = model;
        this.rocznikSamochodu = rocznik;
        this.kolorSamochodu = kolor;
    }
    przywitajSie(){
        console.log(`Cześć! Jestem samochodem ${this.markaSamochodu}, modelu: ${this.modelSamochodu}, jestem z rocznika: ${this.rocznikSamochodu}, mam kolor ${this.kolorSamochodu}.` );
    }

    pokazRocznik(){
        console.log(`Rocznik samochodu to : ${this.rocznikSamochodu}`)
    }

}

const fiat = new Car("Fiat", "Punto", 2010, "blue");
const ford = new Car("Ford", "Mondeo", 1998, "zielony");

fiat.przywitajSie();
ford.przywitajSie();
fiat.pokazRocznik();
ford.pokazRocznik();