import Mame from './_Absctract.js';
"use strict";
class Dom extends Mame {
    $(element) { 
        const query = element[0];
        return {
            show() {
                query.style.display = " ";
                return this;
            },
            hide() {
                query.style.display = "none";
                return this;
            },

            // == For a element & multiple class ==
            toggleClass(classlist) {
                query.classList.toggle(...classlist);
                return this;
            },
            addClass(classlist) {
                query.classList.add(...classlist);
                return this;
            },
            removeClass(classlist) {
                query.classList.remove(...classlist);
                return this;
            },
            containClass(classlist) {
                return query.classList.contains(...classlist);
            },

            // == Listerner == 
            onClick(listener, options) {
                query.addEventListener("click", listener, options);
                return this;
            },
            hover() {
                return {
                    on(listener, options) {
                        query.addEventListener("mouseover", listener, options);
                        return this;
                    },
                    off(listener, options){
                        query.addEventListener("mouseout", listener, options);
                        return this;
                    }
                }
            },  
            focus() {
                return {
                    on(listener, options) {
                        query.addEventListener("focus", listener, options);
                        return this;
                    },
                    off(listener, options) {
                        query.addEventListener("blur", listener, options);
                        return this;
                    }
                }
            },
            animation() {
                return {
                    start(listener, options) {
                        query.addEventListener('animationstart', listener, options);
                        return this;
                    },
                    end(listener, options) {
                        query.addEventListener('animationend', listener, options);
                        return this;
                    }
                }
            },
            onKeyUp(listener, options) {
                query.addEventListener("keyup", listener, options);
                return this;
            },
            onSubmit(listener, options) {
                query.addEventListener("submit", listener, options);
                return this;
            },
        }
    }

    $media(screen) {
        switch (screen) {
            case "phone": {
                screen = '(max-width: 767px)';
                break;
            }
            
            case "tablet": {
                screen = '(max-width: 1023px)';
                break;
            }

            case "desktop": {
                screen = '(min-width: 1023px)';
                break;
            }
        }
        return window.matchMedia(screen).matches;
    }

    $window() {
        return {
            onMedia(screen) { 
                $media (screen); 
                return this; 
            },
            
            onResize(listener, options) {
                window.addEventListener("resize", listener, options);
                return this;
            }
        }
    }
}

const dom = new Dom();
const mame = new Mame(dom)

const $ = (element) => mame.$(element);

export { $ };