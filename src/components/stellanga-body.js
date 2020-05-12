import { LitElement, html, css } from "/web_modules/lit-element.js";

class Body extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }

      /* Media queries */
      @media (min-width: 640px) {
        :host {
            flex-direction: row;
        }
      }
    `;
  }
  render() {
    return html`
      <slot></slot>
      <slot></slot>
    `;
  }
}

customElements.define("stellanga-body", Body);
