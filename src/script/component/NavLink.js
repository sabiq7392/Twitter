import navLinks from "../data/navLinks.js";

class NavLink extends HTMLElement {
    connectedCallback() {
        this.#render();
    }

    #render() {
        navLinks.forEach((navLink) => {
            const { title, icon, iconClass, href, isActive } = navLink;

            if (title === 'Profile') {
                return this.innerHTML += `
                    <div class="nav-link">
                        <a href="${href}" class="${isActive}">
                            <img src="${icon}" class=" ${iconClass}">
                            <span>${title}</span>
                        </a>
                    </div>
                `
            } 

            return this.innerHTML += `
                <div class="nav-link">
                    <a href="${href}" class="${isActive}">
                        <i class="${icon} ${iconClass}"></i>
                        <span>${title}</span>
                    </a>
                </div>
            `;
        });
    }
}

customElements.define('nav-link', NavLink);

export default NavLink;