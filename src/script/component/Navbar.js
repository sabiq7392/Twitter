import { $, $all, $query } from '../lib/lib.js';
// import navMenus from '../data/navLinks.js';

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
        const menus = $all('nav ul .nav-link a');

        for (const menu of menus) {
            const icon = menu.firstElementChild;
            const iconStyleNormal = icon.className;
            const iconStyleChanged = iconStyleNormal + '-fill';

            if ($query(menu).containClass(['active'])) {
                icon.className = iconStyleChanged;
            }
        }
    }
}

customElements.define('side-navbar', Navbar);

export default Navbar;

{/* <li class="nav-link">
<a href="">
    <i class="bi bi-hash escape-hover"></i>
    Explore
</a>
</li>
<li class="nav-link">
<a href="">
    <i class="bi bi-bell"></i>
    Notifications
</a>
</li>
<li class="nav-link">
<a href="">
    <i class="bi bi-envelope"></i>
    Message
</a>
</li>
<li class="nav-link">
<a href="">
    <i class="bi bi-bookmark"></i>
    Bookmarks
</a>
</li>
<li class="nav-link">
<a href="">
    <i class="bi bi-card-list escape-hover"></i>
    Lists
</a>
</li>
<li class="nav-link">
<a href="">
    <img src="src/img/user-profile.png" class="user-profile escape-hover">
    Profile
</a>
</li>
<li class="nav-link">
<a href="">
    <i class="bi bi-three-dots escape-hover"></i>
    More
</a>
</li> */}