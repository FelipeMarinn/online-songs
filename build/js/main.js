(()=>{var n;$(document).ready((function(){$.ajax({url:"../datos.json"}).done((function(c){n=c.canciones;for(var s="",a=0;a<n.length;a++)s+=`\n                <div class='cardItem col-12 col-md-6 col-lg-4 p-0 ' key=${n[a].nombre}>\n                  <div class="card m-1 text-center">\n                    <div class="card-header">\n                      <img class='icono' src='../assets/imagenes/icon_${n[a].icono}.svg'/>\n                    </div>\n                    <div class="card-body">\n                      <h5 class="card-title">${n[a].nombre}</h5>\n                      <p class='card-text'>\n                        <audio class='w-100' src='../assets/canciones/${n[a].ruta}' controls></audio>\n                      </p>\n                    </div>\n                  </div>\n                </div>             \n               `;document.getElementById("canciones").innerHTML=s}))}))})();