let miBoton = document.querySelector('button');
    let miTitulo = document.querySelector('h1');
    
    function estableceNombreUsuario() {
      let miNombre = prompt('Por favor, ingresa tu nombre.');
      if(!miNombre) {
        estableceNombreUsuario();
      } else {
        localStorage.setItem('name', miNombre);
        miTitulo.textContent  = 'Soy el pingüino , ' + miNombre;
      }
    }
    
    if(!localStorage.getItem('name')) {
      estableceNombreUsuario();
    } else {
      let nombreAlmacenado = localStorage.getItem('name');
      miTitulo.textContent  = 'Soy el pingüino , ' + nombreAlmacenado;
    }
    
    miBoton.onclick = function() {
      estableceNombreUsuario();
    }