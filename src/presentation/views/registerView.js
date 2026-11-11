/*
 * Register View
 *
 * Responsabilidad:
 * - Mostrar la interfaz de registro.
 * - Capturar las acciones del usuario.
 * - Informar esas acciones al Presenter.
 *
 * NO contiene lógica de registro.
 */

export function showRegisterView(container, presenter) {
    container.innerHTML = `
        <section class="auth-container">
            <div class="auth-card">

                <header class="auth-header">
                    <h1>Crear cuenta para instituto.</h1>
                    <p>Regístrate para comenzar</p>
                </header>

                <form id="register-form" class="auth-form">

                <div class="form-group">
                    <label for="register-institucion">Institucion Educativa</label>
                        <select id="register-institucion" name="institucion" required>
                            <option value="" disabled selected>-- Selecciona tu institucion educativa --</option>
                            <option>San Jeronimo</option>
                            <option>Otras</option>
                        </select>
                </div>

                    <div class="form-group">
                        <label for="register-name">
                            Nombre
                        </label>

                        <input
                            type="text"
                            id="register-name"
                            name="name"
                            placeholder="Tu nombre"
                            required
                        >
                    </div>
                
                <div class="form-group">    
                    <label for="register-tipoUsuario">Tipo de usuario:</label>
                        <select id="register-tipoUsuario" name="tipo-usuario" required>
                            <option value="" disabled selected>-- seleccione un tipo de usuario --</option>
                            <option>Estudiante</option>
                            <option>Docente</option>
                        </select>
                </div>

                <div class="form-group">
                    <label for="register-genero">Género:</label>
                        <select id="register-genero" name="genero" required>
                            <option value="" disabled selected>-- seleccione un género --</option>
                            <option>Masculino</option>
                            <option>Femenino</option>
                            <option>Otro</option>
                        </select>

                    <div class="form-group">
                        <label for="register-email">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="register-email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            required
                        >
                    </div>

                    <div class="form-group">
                        <label for="register-password">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            id="register-password"
                            name="password"
                            placeholder="Crea una contraseña"
                            required
                        >
                    </div>

                    <label for="aceptar">Activo</label>
                <input type="checkbox" id="check" name="check" value="si">



                    <button
                        type="submit"
                        class="button button-primary"
                    >
                        Crear cuenta
                    </button>

                </form>

                <div class="auth-footer">

                    <p>¿Ya tienes una cuenta?</p>

                    <button
                        id="show-login"
                        class="button button-link"
                        type="button"
                    >
                        Iniciar sesión
                    </button>

                </div>

                <p
                    id="register-message"
                    class="form-message"
                ></p>

            </div>
        </section>
    `;

    const registerForm =
        document.getElementById("register-form");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userData = {
            institucion: formData.get("institucion"),
            name: formData.get("name"),
            tipoUsuario: formData.get("tipo-usuario"),
            genero: formData.get("genero"),
            email: formData.get("email"),
            password: formData.get("password"),
            check: formData.get("check")
        };

        presenter.register(userData);
    });

    const loginButton =
        document.getElementById("show-login");

    loginButton.addEventListener("click", () => {
        presenter.showLogin();
    });
}

export function showRegisterMessage(message) {
    const messageElement =
        document.getElementById("register-message");

    if (messageElement) {
        messageElement.textContent = message;
    }
}