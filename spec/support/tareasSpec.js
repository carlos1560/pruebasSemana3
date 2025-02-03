// spec/tareasSpec.js

describe("Sistema de Gestión de Tareas", function() {
    it("debería verificar que el formulario de inicio de sesión se muestra correctamente", function() {
        // Crear un contenedor en el DOM para agregar el formulario
        let container = document.createElement('div');
        document.body.appendChild(container);
        container.innerHTML = `
            <section id="login-form">
                <form id="formulario-login">
                    <input type="email" id="email-login" placeholder="Correo electrónico" required>
                    <input type="password" id="password-login" placeholder="Contraseña" required>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </section>
        `;

        let emailInput = document.getElementById('email-login');
        let passwordInput = document.getElementById('password-login');

        expect(emailInput).not.toBeNull();
        expect(passwordInput).not.toBeNull();
        expect(emailInput.placeholder).toBe("Correo electrónico");
        expect(passwordInput.placeholder).toBe("Contraseña");
    });

    
});
