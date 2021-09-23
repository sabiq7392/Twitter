import { $ } from '../lib/Lib.js'

class MakePost extends HTMLElement {
    connectedCallback() {
        this.#render();
    }

    #render() {
        this.innerHTML = `
            <section class="container-make-post">
                <div class="container-user-profile">
                    <img src="src/img/user-profile.png" alt="User" class="user-profile">
                </div>
                <div class="make-post">
                    <div class="container-textarea">
                        <textarea id="makePostTextarea" rows="1" placeholder="What's happening?"></textarea>
                    </div>
                    <div class="container-btn-action">
                        <section class="d-flex place-items-center gap-1">
                            <button title="Media"><i class="bi bi-card-image"></i></button>
                            <button title="GIF"><i class="bi bi-gift"></i></button>
                            <button title="Poll"><i class="bi bi-bar-chart-line"></i></button>
                            <button title="Emoji"><i class="bi bi-emoji-smile"></i></button>
                        </section>
                        <section class="d-flex place-items-center">
                            <button class="btn-post-tweet">Tweet</button>
                        </section>
                    </div>
                </div>
            </section>
        `;

        this.#resetTextareaWhenPageReload();
    }

    #resetTextareaWhenPageReload() {
        const textarea = $('#makePostTextarea');
        textarea.value = ''
    }
}

customElements.define('make-post', MakePost);