document.addEventListener('DOMContentLoaded', function() {
var carritoIcon = document.querySelector('.carrito-icon');
  var carritoCantidad = document.querySelector('.cantidad-carrito');
  var carritoItems = [];
 var agregarAlCarritoButtons = document.querySelectorAll('.agregar-carrito');
  agregarAlCarritoButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var producto = this.parentNode;
      var nombre = producto.querySelector('.titulo').textContent;

      var item = {
        nombre: nombre
      };

      carritoItems.push(item);
      actualizarCarrito();
    });
  });

  function actualizarCarrito() {
    carritoCantidad.textContent = carritoItems.length;
  }

  carritoIcon.addEventListener('click', function(event) {
    event.preventDefault();
    mostrarProductosCarrito();
  });

  function mostrarProductosCarrito() {
    if (carritoItems.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    var mensaje = 'Productos en el carrito:\n\n';
    carritoItems.forEach(function(item) {
      mensaje += '- ' + item.nombre + '\n';
    });

    alert(mensaje);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var inicioSesion = document.querySelector('.login-icon .inicio-sesion');
  var formularioInicioSesion = document.getElementById('formulario-inicio-sesion');

  inicioSesion.addEventListener('click', function(event) {
    event.preventDefault();
    formularioInicioSesion.style.display = 'block';

    
    var mensajeBienvenida = document.createElement('div');
    mensajeBienvenida.textContent = 'BIENVENIDO A LA TIENDA DE TIENDA/DELIVERY TITOF (estamos para servirte)';
    mensajeBienvenida.classList.add('mensaje-bienvenida');
    document.body.appendChild(mensajeBienvenida);

    setTimeout(function() {
      mensajeBienvenida.style.display = 'none';
    }, 5000);
  });

  document.addEventListener('click', function(event) {
    var targetElement = event.target;
    if (!inicioSesion.contains(targetElement) && !formularioInicioSesion.contains(targetElement)) {
      formularioInicioSesion.style.display = 'none';
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var vaciarCarritoLink = document.querySelector('.vaciar-carrito');
  var carritoItems = [];

  vaciarCarritoLink.addEventListener('click', function(event) {
    event.preventDefault();
    var confirmacion = confirm('¿Estás seguro de vaciar el carrito?');
    if (confirmacion) {
      carritoItems = [];
      actualizarCarrito();
    }
  });

  function actualizarCarrito() {
    var carritoCantidad = document.querySelector('.cantidad-carrito');
    carritoCantidad.textContent = carritoItems.length;
  }
});