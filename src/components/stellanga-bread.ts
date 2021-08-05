import { LitElement, html, css } from 'lit-element';

class Bread extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 80%;
      }

      p {
        padding: 0.5rem 0;
        margin: 0;
        font-weight: 300;
        font-family: 'Lato', sans-serif;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 1s linear;
      }

      p.show {
        visibility: visible;
        opacity: 1;
      }

      a {
        text-decoration: none;
        background: var(--text-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `;
  }

  // Reveal content after initial update
  firstUpdated() {
    let delay = 200;
    const children = this.shadowRoot.children;
    for (let i = 0; i < children.length; i++) {
      setTimeout(() => {
        const child = children[i];
        child.classList.add('show');
      }, delay);

      delay += 200;
    }
  }

  render() {
    return html`
      <p>
        Hi, I’m Stellan, father-of-one that likes creating things for the web
        (which I've been doing the last 10+ years or so). I see myself as a
        creative developer since I'm closer to code than Van Gogh.
      </p>
      <p>
        I like drawing and math but isn’t especially good at either. I have
        humour. I've done many parts of a modern (and not so modern) frontend so
        I've had reasons to both celebrate and despair.
      </p>
      <p>
        If you or your company is looking for someone to help out with web
        development I'd love to hear from you. Check out my
        <a href="https://www.linkedin.com/in/stellangarhammar/">resume</a> and
        drop me a <a href="mailto:owner@stellanga.com">mail</a>.
      </p>
    `;
  }
}

customElements.define('stellanga-bread', Bread);
