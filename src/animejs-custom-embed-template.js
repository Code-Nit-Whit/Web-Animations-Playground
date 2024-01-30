class AnimeAnimationElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.animationData = null;
      this.options = {
        autoplay: false,
        loop: false,
        currentTime: 0,
        paused: true,
      };
    }
  
    connectedCallback() {
      const shadowRoot = this.shadowRoot;
  
      const cssSlotContent = shadowRoot.querySelector('style').textContent;
      const styleElement = document.createElement('style');
      styleElement.textContent = cssSlotContent;
      shadowRoot.appendChild(styleElement);
  
      const htmlSlotContent = shadowRoot.querySelector('slot[name="html"]').textContent;
      this.animationData = JSON.parse(htmlSlotContent);
      const animatedElement = document.createElement('div');
      animatedElement.classList.add('animated-element');
      animatedElement.innerHTML = this.animationData.content;
      shadowRoot.appendChild(animatedElement);
  
      this.anime = anime(animatedElement, this.animationData.animations);
  
      this._setPaused(this.options.paused);
      if (this.options.autoplay) {
        this.play();
      }
  
      this.addEventListener('play', () => this.play());
      this.addEventListener('pause', () => this.pause());
      this.addEventListener('seek', (event) => this.seekTo(event.detail.time));
      this.addEventListener('setLoop', (event) => this.setLoop(event.detail.loop));
      this.addEventListener('setAutoplay', (event) => this.setAutoplay(event.detail.autoplay));
    }
  
    // ... Implement play, pause, seekTo, setLoop, setAutoplay, and _setPaused methods as before
  }
  
  customElements.define('anime-animation', AnimeAnimationElement);