import storyItems from '../data/storyItems.js';
import { $ } from '../lib/Mame.js';

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
              <div class="dropdown-menu-more">
                <button class="dropdown-menu-more-button" title="More">
                  <i class="bi bi-chevron-down"></i>
                </button>
                <div class="dropdown-menu-more-content d-none">
                  <a href="">
                    <i class="bi bi-person-plus"></i> 
                    <span>Follow ${user.username}</span>
                  </a>
                  <a href="">
                    <i class="bi bi-file-earmark-plus"></i>
                    <span>Add/remove ${user.username} from lists</span>
                  </a>
                  <a href="">
                    <i class="bi bi-volume-mute"></i>
                    <span>Mute ${user.username}</span>
                  </a>
                  <a href="">
                    <i class="bi bi-x-circle"></i>
                    <span>Block ${user.username}</span>
                  </a>
                  <a href="">
                    <i class="bi bi-chevron-expand rotate"></i>
                    <span>Embed Tweet</span>
                  </a>
                  <a href="">
                    <i class="bi bi-flag reverse"></i>
                    <span>Report Tweet</span>
                  </a>
                </div>
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

    this.#dropdownMenuMore();
  }

  #dropdownMenuMore() {
    const dropdowns = $('.dropdown-menu-more');

    dropdowns.forEach((dropdown) => {
      $(dropdown).onClick(() => {
        const button = dropdown.firstElementChild;
        const content = dropdown.lastElementChild;
        showHideDropdownContent(content)
        changeBackgroundColorButton(button)
      });
    });

    const showHideDropdownContent = (content) => {
      $(content).toggleClass(['d-none'])
    }

    const changeBackgroundColorButton = (button) => {
      $(button).toggleClass(['active'])
    }
  }
}

customElements.define('story-item', StoryItem);