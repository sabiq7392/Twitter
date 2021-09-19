import storyItems from "../data/storyItems.js";

class StoryItem extends HTMLElement {
    connectedCallback() {
        this.#render();
    }

    #render() {
        storyItems.forEach((storyItem) => {
            const { 
                id, image, user, storyContent, hashtag, total, timeCreated,
            } = storyItem;
            this.innerHTML += `
                <section id="${id}" class="story-item">
                    <div class="image-user">
                        <img src="${image.user}" alt="${user.nickname}">
                    </div>  
                    <div class="story-user">
                        <div class="d-flex justify-content-space-between">
                            <div>
                                <p class="id-user">
                                    <b class="nickname">${user.nickname}</b>
                                    <span class="username">${user.username}</span>
                                    <i class="bi bi-dot"></i>
                                    <time>${timeCreated}</time>
                                </p>
                            </div>
                            <div>
                                <i class="bi bi-chevron-down"></i>
                            </div>
                        </div>
                        <div class="story-user-content">
                            <p> 
                                ${storyContent}
                                <span class="hashtag">${hashtag}</span>
                            </p>
                            <img src="${image.post}">
                        </div>
                        <div class="container-btn-action">
                            <button title="Reply">
                                <i class="bi bi-chat"></i>
                                <span>${total.reply}</span>
                            </button>
                            <button title="Retweet">
                                <i class="bi bi-arrow-repeat"></i>
                                <span>${total.retweet}</span>
                            </button>
                            <button title="Like">
                                <i class="bi bi-heart"></i>
                                <span>${total.like}</span>
                            </button>
                            <button title="Share">
                                <i class="bi bi-upload"></i>
                                <span>${total.share}</span>
                            </button>
                        </div>
                    </div>
                </section>
            `;
        });
        
    }
}

customElements.define('story-item', StoryItem);