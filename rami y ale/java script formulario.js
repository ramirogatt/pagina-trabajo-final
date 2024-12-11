document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre && email && asunto && mensaje) {
      alert('Formulario enviado con éxito');
      this.reset();  // Limpiar el formulario después de enviar
  } else {
      alert('Por favor, complete todos los campos.');
  }
});