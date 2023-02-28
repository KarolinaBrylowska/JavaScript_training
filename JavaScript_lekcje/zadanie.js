const addInput = document.querySelector('input#add_input'); //zapisuje do zmiennej inputa
const itemsList = document.querySelector('#items_list');


function remove_item(e){
    const remove_parent = e.parentNode
    remove_parent.remove();
}

addInput.addEventListener("keyup", e => { //nasłuchuję wydarzenia: pisania na klawiaturze, oraz eventu kliknięcia na klawisz enter
    const inputValue = addInput.value;
    
    if(e.keyCode == 13 && inputValue.length>0){ //tworzę instrukcję warunkową : jeśli wartość keyCode tego eventu jest równa 13(czyli naciśnięcie enter),
        // i w dodatku długość ciągu znaków jest >0, to ....
        const new_item = document.createElement("li"); //tworzymy nowy element listy
        new_item.classList.add('items'); //dodajemy mu klasę 'items'
        new_item.innerText = inputValue; //dodaję mu tez wartość, czyli tę moją inputValue

        const buttonUsun = document.createElement("button"); //dodajemy tez button "Usuń"
        buttonUsun.classList.add('del-btn'); //dodaję mu określoną klasę 
        
        buttonUsun.setAttribute('key', inputValue); //ustalam atrybut key, uzaleniając go jednocześnie od wartości inputu
        buttonUsun.innerText = 'Usuń'; //musiałam ręcznie pozmieniać style, wszystkie
        buttonUsun.setAttribute("onClick","remove_item(this)");

        buttonUsun.style.width = "40px";
        buttonUsun.style.background = "#ff4242";
        buttonUsun.style.color= "#fff" ;
        buttonUsun.style.fontWeight = "bold";
        buttonUsun.style.cursor= "pointer";
        buttonUsun.style.outline= "none";
        buttonUsun.style.border = "none";

        

    new_item.appendChild(buttonUsun); 
       console.log(new_item);
       itemsList.appendChild(new_item);
       addInput.value = "";


        }
    })

   




