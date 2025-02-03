// Obtener tareas del usuario
fetch('/api/tareas', {
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
})
.then(res => res.json())
.then(tareas => {
    // Mostrar tareas en la página web
    const listaTareas = document.getElementById('lista-tareas');
    listaTareas.innerHTML = ''; // Limpia la lista antes de agregar nuevas tareas
    tareas.forEach(tarea => {
        const elementoTarea = document.createElement('li');
        elementoTarea.textContent = tarea.titulo;
        listaTareas.appendChild(elementoTarea);
    });
});

// Crear una nueva tarea
const formularioTarea = document.getElementById('formulario-tarea');
formularioTarea.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo-tarea').value;
    const descripcion = document.getElementById('descripcion-tarea').value;
    fetch('/api/tareas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({ titulo, descripcion })
    })
    .then(res => res.json())
    .then(data => {
        // Actualizar la lista de tareas en la página web
        console.log(data.mensaje);
        formularioTarea.reset(); // Limpia el formulario después de crear la tarea
        obtenerTareas(); // Vuelve a cargar las tareas actualizadas
    });
});

// Función para obtener y mostrar las tareas
function obtenerTareas() {
    fetch('/api/tareas', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(res => res.json())
    .then(tareas => {
        const listaTareas = document.getElementById('lista-tareas');
        listaTareas.innerHTML = '';
        tareas.forEach(tarea => {
            const elementoTarea = document.createElement('li');
            elementoTarea.textContent = tarea.titulo;
            listaTareas.appendChild(elementoTarea);
        });
    });
}