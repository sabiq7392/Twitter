import trends from '../data/trends.js';

class TrendsForYou extends HTMLElement {
    connectedCallback() {
        this.#render();
    }

    #render() {
        trends.forEach((trend) => {
            const { trending, hashtag, title, paragraph, image, infoTweeting } = trend;

            if (image === undefined) {
                return this.innerHTML += `
                    <section class="trends-for-you">
                        <div class="sub-heading">
                            <span>${trending}</span>
                            <strong>${hashtag}</strong>
                        </div>
                        <div class="content-trends-for-you no-border">
                            <div class="content-text">
                                <h3>${title}</h3>
                            </div>
                        </div>
                        <div class="info-people-tweeting">
                            <span>${infoTweeting}</span>
                        </div>
                    </section>
                `;
            }

            return this.innerHTML += `
                <section class="trends-for-you">
                    <div class="sub-heading">
                        <span>${trending}</span>
                        <strong>${hashtag}</strong>
                    </div>
                    <div class="content-trends-for-you">
                        <div class="content-text">
                            <h3>${title}</h3>
                            <p>${paragraph}</p>
                        </div>
                        <div class="content-image d-grid">
                            <img src="${image}" alt="">
                        </div>
                    </div>
                    <div class="info-people-tweeting">
                        <span>${infoTweeting}</span>
                    </div>
                </section>
            `;
        });
    }
}

customElements.define('trends-for-you', TrendsForYou);