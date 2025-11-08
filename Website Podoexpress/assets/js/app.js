// app.js

// Cargar el archivo JSON
fetch('datos_feethaus.json')
  .then(response => response.json())
  .then(data => {
    // Extraer los datos y agregarlos a la página
    cargarServicios(data);
    cargarTratamientoLaser(data);
    cargarConocenos(data);
    cargarContacto(data);
  })
  .catch(error => console.error('Error al cargar el JSON:', error));

// Función para cargar los Servicios
function cargarServicios(data) {
  const serviciosSection = document.getElementById('servicios');
  const servicios = data.filter(item => item.url.includes('servicios'));
  
  servicios.forEach(servicio => {
    const servicioDiv = document.createElement('div');
    servicioDiv.classList.add('servicio');
    
    const titulo = document.createElement('h3');
    titulo.textContent = servicio.title;

    const descripcion = document.createElement('p');
    descripcion.textContent = servicio.content;

    servicioDiv.appendChild(titulo);
    servicioDiv.appendChild(descripcion);
    serviciosSection.appendChild(servicioDiv);
  });
}

// Función para cargar Tratamiento Láser
function cargarTratamientoLaser(data) {
  const tratamientoSection = document.getElementById('tratamiento-laser');
  const tratamiento = data.find(item => item.url.includes('tratamientos-laser'));

  if (tratamiento) {
    const descripcion = document.createElement('p');
    descripcion.textContent = tratamiento.content;
    tratamientoSection.appendChild(descripcion);
  }
}

// Función para cargar Conócenos
function cargarConocenos(data) {
  const conocenosSection = document.getElementById('conocenos');
  const conocenos = data.find(item => item.url.includes('nosotros'));

  if (conocenos) {
    const descripcion = document.createElement('p');
    descripcion.textContent = conocenos.content;
    conocenosSection.appendChild(descripcion);
  }
}

// Función para cargar Contacto
function cargarContacto(data) {
  const contactoSection = document.getElementById('contacto');
  const contacto = data.find(item => item.url.includes('contacto'));

  if (contacto) {
    const descripcion = document.createElement('p');
    descripcion.textContent = contacto.content;
    contactoSection.appendChild(descripcion);
  }
}