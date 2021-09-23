import { $ } from '../lib/Lib.js';

class Navbar extends HTMLElement {
    connectedCallback() {
        this.#render();
    }

    #render() {
        this.innerHTML = `
            <nav>
                <div class="logo">
                    <a href="index.html">
                        <img src="src/img/twitter.svg" alt="Twitter">
                    </a>
                </div>
                <div class="container-nav-link">
                    <nav-link></nav-link>
                    <div class="container-btn-tweet">
                        <a href="" class="btn-tweet">Tweet</a>
                    </div>
                </div>
            </nav>
        `;
        this.#hover();
    }

    #hover() {
        const menus = $('nav ul .nav-link a');

        for (const menu of menus) {
            const icon = menu.firstElementChild;
            const iconStyleNormal = icon.className;
            const iconStyleChanged = iconStyleNormal + '-fill';

            if ($([menu]).containClass(['active'])) {
                icon.className = iconStyleChanged;
            }
        }
    }
}

customElements.define('side-navbar', Navbar);

export default Navbar;
