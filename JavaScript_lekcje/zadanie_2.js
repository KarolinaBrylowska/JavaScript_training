const ten_input = document.querySelector('input#add_input'); //zapisuję okienko input do zmiennej
const lista_elementow = document.querySelector('#items_list'); //zapisuję okienko listy do zmiennej



ten_input.addEventListener("keyup", e =>{ //nasłuchuję wydarzenia na okienku input: wpisywania znaków do ostatniego puszczonego
    //klawisza, oraz eventu
 const nowy_input = ten_input.value; //pobieram tekst wpisany do okienka input
 
   if(nowy_input.length>0 && e.keyCode === 13) { //tworzę instrukcję warunkową: jeśli wartość długości tego, co wpiszemy jest >0 oraz event keyCode ==13 (naciśniecie ENTER)

    const nowy_element_listy = document.createElement('li') //tworzę nowy element listy
    nowy_element_listy.classList.add("items"); //nadaję mu określoną klasę
    nowy_element_listy.innerText = nowy_input; //nadaję mu tekst, który jest wartością wpisaną do inputu

    const button_usun = document.createElement('button') //tworze przycisk usuń
    button_usun.classList.add('del_btn'); //nadaję mu odpowiednią klasę
    button_usun.setAttribute("key", nowy_input); //ustawiam mu tez atrybut "key", uzaleniam go od wartości wpisanej do inputa
    button_usun.innerText = 'Usuń'; //przypisuję mu tekst "USUŃ"
    button_usun.setAttribute("onClick", "remove_item(this)");

    nowy_element_listy.appendChild(button_usun); 
    lista_elementow.appendChild(nowy_element_listy);

    ten_input.value = "";
    }
})
function remove_item(element){ //funkcja do usuwania elementu z listy, eby usuwał się cały element a nie tylko button "usuń"
    const usun_rodzica = element.parentNode // usuwa równie rodzica, miejsce, gdzie jest zagniezdzony nasz przycisk
    usun_rodzica.remove();
}







