import { $ } from '../lib/Mame.js';

class InputSearch extends HTMLElement {
    connectedCallback() {
        this.#render();
    }

    #render() {
        this.innerHTML = `
            <div class="container-input-search">
                <i id="iconSearch" class="bi bi-search"></i>
                <input id="inputSearch" type="search" placeholder="Search Twitter">
                <button id="buttonResetSearch" class="d-none"><i class="bi bi-x-circle-fill"></i></button>
            </div>

            <div id="contentSearched" class="d-none">
                <p>Try Searching for people, topics, keywords</p>
            </div>
        `;
        this.#focus();
    }

    #focus() {
        const input = {
            self: $('#inputSearch'),
            icon: $('#iconSearch'),
            parent: $('#inputSearch').parentElement,
            color: {
                black: '#000',
                primary: '#1DA1F2',
            },
            border: {
                default: '',
                changed: '1px solid #1DA1F2'
            },
            background: {
                default: '#E1E8ED',
                changed: 'rgba(0,0,0,0)'
            }
        }
        const { self, icon, parent, color, border, background } = input;

        $([self]).focus()
            .on(() => { 
                parent.style.background = background.changed;
                parent.style.border = border.changed;
                icon.style.color = color.primary
                
                this.#contentSearched({ display: 'show' });

                $([self]).onKeyUp(() => {
                    this.#resetButton({ display: 'show', input: self, });
                });

                if (self.value !== '') {
                    this.#resetButton({ display: 'show', input: self, });
                }
            })
            .off(() => {
                parent.style.background = background.default;
                parent.style.border = border.default;
                icon.style.color = color.black

                this.#contentSearched({ display: 'hide' })
            });

        this.#hideResetButtonWhenBlur({ reset: self });
    }

    #hideResetButtonWhenBlur({ reset }) {
        $([document]).onClick((event) => {
            const clickedElement = event.target;
            if (clickedElement !== reset) {
                this.#resetButton({ display: 'hide', input: reset });
            }
        });
    }

    #resetButton({ display, input }) {
        const buttonResetSearch = $('#buttonResetSearch');

        if (display === 'show') {
            $([buttonResetSearch])
                .addClass(['d-block'])
                .removeClass(['d-none'])
                .onClick(() => {
                    input.value = '';
                    $([buttonResetSearch])
                        .addClass(['d-none'])
                        .removeClass(['d-block'])
                });

        } else if (display === 'hide') {
            $([buttonResetSearch])
                .addClass(['d-none'])
                .removeClass(['d-block']);
        }
    }

    #contentSearched({ display }) {
        const contentSearched = $('#contentSearched');

        if (display === 'show') {
            $([contentSearched])
                .addClass(['d-grid'])
                .removeClass(['d-none'])

        } else if (display === 'hide') {
            $([contentSearched])
                .addClass(['d-none'])
                .removeClass(['d-grid'])
        }
    }
}

customElements.define('input-search', InputSearch);