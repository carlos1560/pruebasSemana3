document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('formulario-login');
    const registroForm = document.getElementById('formulario-registro');
    const registroLink = document.getElementById('registro-link');
    const loginLink = document.getElementById('login-link');
    const tareasSection = document.getElementById('tareas-section');
    const loginSection = document.getElementById('login-form');
    const registroSection = document.getElementById('registro-form');

    registroLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginSection.style.display = 'none';
        registroSection.style.display = 'block';
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        registroSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email-login').value;
        const password = document.getElementById('password-login').value;

        fetch('/api/usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                loginSection.style.display = 'none';
                tareasSection.style.display = 'block';
                obtenerTareas(); // Llama a la función para cargar las tareas
            } else {
                alert('Credenciales incorrectas');
            }
        });
    });

    registroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre-registro').value;
        const email = document.getElementById('email-registro').value;
        const password = document.getElementById('password-registro').value;

        fetch('/api/usuarios/registro', )})
    
    });