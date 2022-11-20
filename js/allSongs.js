var allSongs 

// Todas las canciones -------------------------
$(document).ready(function() {

    $.ajax({
        url: '../datos.json'
    }).done(function (datos) {

        allSongs = datos.canciones

        var cardMusic = ''
        for (var i = 0; i < allSongs.length; i++) {
          
            cardMusic +=
               `
                <div class='cardItem col-12 col-md-6 col-lg-4 p-0 ' key=${allSongs[i].nombre}>
                  <div class="card m-1 text-center">
                    <div class="card-header">
                      <img class='icono' src='../assets/imagenes/icon_${allSongs[i].icono}.svg'/>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">${allSongs[i].nombre}</h5>
                      <p class='card-text'>
                        <audio class='w-100' src='../assets/canciones/${allSongs[i].ruta}' controls></audio>
                      </p>
                    </div>
                  </div>
                </div>             
               `
        }
        document.getElementById('canciones').innerHTML = cardMusic
    })
})


// Busqueda de canciones --------------------------
var input, filter, cardItem, card, title, txtValue;

function buscarCanciones() {
   
    input = document.getElementById('inputSearch')
    filter = input.value.toUpperCase()
    cardItem = document.getElementsByClassName('cardItem')
    card = document.getElementsByClassName('card')
    console.log(filter)
    for (i = 0; i < card.length; i++) {
        title = card[i].getElementsByClassName('card-title')[0];
        txtValue = title.textContent || title.innerText; 

        console.log(txtValue)
        
  
        if (txtValue.toUpperCase().indexOf(filter) > -1 || input.value.trim().length == 0) {
            cardItem[i].style.display = "";       
        }   
        else {
            cardItem[i].style.display = "none";
        }
     } 
}
