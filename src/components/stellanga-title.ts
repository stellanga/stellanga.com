import { LitElement, html, css } from 'lit-element';

class Title extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        padding: 1rem;
        margin: 0;
        text-transform: uppercase;
        font-family: 'HK Nova Medium';
        background-clip: text;
        text-fill-color: transparent;
      }

      h1 {
        writing-mode: vertical-lr;
        text-orientation: upright;
        letter-spacing: 20px;
        margin: 1rem 0;
        background: var(--text-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      @media (min-width: 640px) {
        h1 {
          letter-spacing: 12px;
        }
      }

      @media (min-width: 768px) {
        h1 {
          letter-spacing: -25px;
        }
      }
    `;
  }
  render() {
    return html` <h1>stellanga</h1> `;
  }
}

customElements.define('stellanga-title', Title);
