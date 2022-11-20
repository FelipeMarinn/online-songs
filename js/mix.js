var songs 

// Todas las canciones -------------------------
$(document).ready(function() {

    $.ajax({
        url: '../datos.json'
    }).done(function (datos) {

        songs = datos.canciones

        const random = Math.floor(Math.random() * 9)
        var playMusic =
           `
            <div class='cardItem col-12' key=${songs[random].nombre}>
              <div class="card m-1 text-center">
                <div class="card-header">
                  <img class='icono' src='../assets/imagenes/icon_${songs[random].icono}.svg'/>
                </div>
                <div class="card-body">
                  <h5 class="card-title">${songs[random].nombre}</h5>
                  <p class='card-text'>
                    <audio class='w-100' src='../assets/canciones/${songs[random].ruta}' controls></audio>
                  </p>
                </div>
              </div>
            </div>             
           `

        document.getElementById('songMix').innerHTML = playMusic
    })
})
