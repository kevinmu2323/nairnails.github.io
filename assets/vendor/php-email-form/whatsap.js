document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById('date');
  const timeSelect = document.getElementById('time');

  // Horarios disponibles para cada día (por índice)
  const horarios = {
    1: ["08:00", "10:00", "14:00", "16:00", "18:00"], // Lunes
    2: ["08:00", "10:00", "14:00", "16:00"], // Martes
    3: ["08:00", "10:00", "14:00", "16:00", "18:00"], // Miércoles
    4: ["08:00", "10:00", "14:00", "16:00"], // Jueves
    5: ["08:00", "10:00", "14:00", "16:00", "18:00"], // Viernes
    6: ["7:00", "9:00", "11:00"], // Sábado
    0: [] // Domingo (Cerrado)
  };

  // Función para obtener el día de la semana manualmente desde el input
  function obtenerIndiceDia(fecha) {
    const [año, mes, dia] = fecha.split('-').map(Number);
    const fechaObjeto = new Date(año, mes - 1, dia); // Crear objeto Date
    return fechaObjeto.getDay(); // Obtener el índice del día (0-6)
  }

  // Evento: Al cambiar la fecha, actualizar los horarios disponibles
  dateInput.addEventListener('change', function () {
    const fechaSeleccionada = dateInput.value;

    // Validar que haya una fecha seleccionada
    if (!fechaSeleccionada) return;

    const diaSeleccionado = obtenerIndiceDia(fechaSeleccionada);

    // Limpiar las opciones anteriores
    timeSelect.innerHTML = '<option value="">Selecciona un horario</option>';

    // Verificar si hay horarios disponibles para el día seleccionado
    if (horarios[diaSeleccionado].length > 0) {
      horarios[diaSeleccionado].forEach(hora => {
        const option = document.createElement('option');
        option.value = hora;
        option.textContent = hora;
        timeSelect.appendChild(option);
      });
    } else {
      alert("No se atiende los domingos. Selecciona otro día.");
      dateInput.value = ''; // Limpiar la fecha
    }
  });
});




document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('enviar').addEventListener('click', function() {
    // Capturar los valores del formulario
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('phone').value.trim();
    const fecha = document.getElementById('date').value;
    const hora = document.getElementById('time').value;
    const Edad = document.getElementById('Edad').value;
    const mensaje = document.getElementById('message').value.trim();

    // Validación básica
    if (!nombre || !email || !telefono || !fecha || !hora) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Generar el mensaje con los datos capturados
    const textoMensaje = `
      *Reserva de Servicio:*
- *Nombre:* ${nombre}
- *Edad:* ${Edad}
- *Email:* ${email}
- *Modelo de uña:* ${telefono}
- *Fecha:* ${fecha}
- *Hora:* ${hora}
- *Mensaje adicional:* ${mensaje || 'N/A'}
    `;

    // Codificar el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(textoMensaje.trim());

    // Número de WhatsApp (sin espacios ni signos más)
    const numeroWhatsApp = "5491157192720"; 

    // Generar el enlace de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(urlWhatsApp, '_blank');
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const enviarBtn = document.getElementById('enviar2');

  enviarBtn.addEventListener('click', function () {
    const nombre = document.getElementById('name2').value.trim();
    const email = document.getElementById('email2').value.trim();
    const mensaje = document.getElementById('message2').value.trim();

    // Validación básica
    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Generar mensaje para WhatsApp
    const textoMensaje = `
      *Nueva Consulta:*
      - *Nombre:* ${nombre}
      - *Email:* ${email}
      - *Mensaje:* ${mensaje}
    `;

    // Codificar mensaje para URL
    const mensajeCodificado = encodeURIComponent(textoMensaje.trim());

    // Número de WhatsApp (con formato internacional)
    const numeroWhatsApp = "+5491157192720 "; // Cambia al número deseado

    // Crear la URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(urlWhatsApp, '_blank');
  });
});
