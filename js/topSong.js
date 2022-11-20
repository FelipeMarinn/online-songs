
var listCanciones
var top3 = []

// Top 3 canciones ----------------------
$(document).ready(function () {

    $.ajax({
        url: '../datos.json'
    }).done(function (datos) {

        // guardamos los datos en la variable listCanciones
        listCanciones = datos.canciones
       
        // ordenamos las canciones de mayor a menor 
        listCanciones.sort((a,b) => {
            if (a.reproducciones > b.reproducciones) {
                return -1
            }
             if (a.reproducciones < b.reproducciones) {
                return 1
            }
            return 0
        })
       
        // tomamos los 3 primero elemetos del array 
        for (var i = 0; i < 3; i++) {       
              top3.push(listCanciones[i])
        }

        console.log(top3)
       
        var html = ''
        // creamos el siguiente html por cada elemento del array 
        for (var i = 0; i < top3.length; i++) {
            html += `
                     <tr id=${top3[i].nombre} key=${top3[i].nombre}>
                       <td>${top3[i].nombre}</td>
                       <td>
                         <audio src="../assets/canciones/${top3[i].ruta}" controls></audio>
                       </td>
                     </tr>
                    `
        }
        // tomamos el elemento list y le asignamos el html 
        document.getElementById('top3').innerHTML = html      
    })
})




