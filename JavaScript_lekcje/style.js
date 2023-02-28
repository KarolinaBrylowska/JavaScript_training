const h2Element = document.querySelector('div#band h2.w3-wide');

let switchVar = false;

h2Element.addEventListener("click", function(){
    //console.log("Działa!")
    //zmiana koloru h2 na czerwony
    if (switchVar == false){
        this.style.color= "red";
        this.style.fontSize = "56px"; 
    } else {
        this.style.color= "black";
        this.style.fontSize = "26px";
    }
    switchVar =! switchVar
    
    //this.style = "color: yellow";
    //this.style = "text-decoration: underline"; Niezalecany sposób przypisywania styli css, bo on to wszystko kasuje!
})

const bar = document.querySelector('div.w3-bar')
window.addEventListener("scroll", () =>{
    if (window.scrollY > 350){
        bar.style.background = "blue"
    } else {
        bar.style.background = "pink"
}
})
