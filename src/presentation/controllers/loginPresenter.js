/*
 * Login Presenter
 *
 * Responsabilidad:
 * - Recibir las acciones de Login View.
 * - Coordinar el Login.
 *
 * La autenticación real será implementada
 * mediante el Use Case correspondiente.
 */

import { showLoginMessage } from "../views/loginView.js";
import { showRegisterView } from "../views/registerView.js";
import { RegisterPresenter } from "./registerPresenter.js";
import { showClassView } from "../views/classView.js";
import { showHome } from "../views/homeView.js";
import { renderNavbar} from "../components/navbar.js";

export class LoginPresenter {

    constructor(container, loginUser, registerUser, classPresenter) {
        this.container = container;
        this.loginUser = loginUser;
        this.registerUser = registerUser;
        this.classPresenter = classPresenter;
    }

    async login(credentials) {

        try {

            const user =
                await this.loginUser.execute(
                    credentials
                );
            console.log("Usuario autenticado:",user);
            localStorage.setItem("userActive", JSON.stringify(user));
            
            
            showHome(this.container,this.classPresenter);
            

        } catch (error) {

            showLoginMessage(
                error.message,
                "danger"
                
            );
        }
    }

    showRegister() {

        const registerPresenter =
            new RegisterPresenter(
                this.container,
                this.registerUser,
                this
            );

        showRegisterView(
            this.container,
            registerPresenter
        );
    }
}