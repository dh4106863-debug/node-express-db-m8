document.addEventListener('DOMContentLoaded', () => {
  const btnCargar = document.getElementById('btn-cargar');
  const divResultado = document.getElementById('resultado');

  btnCargar.addEventListener('click', async () => {
    divResultado.textContent = 'Cargando datos...';
    
    try {
      //Consume la ruta creada en el controlador
      const response = await fetch('/usuarios');
      const data = await response.json();

      //Muestra los datos anidados en formato JSON ordenado
      divResultado.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      divResultado.textContent = 'Error al conectar con la API: ' + error.message;
    }
  });
});