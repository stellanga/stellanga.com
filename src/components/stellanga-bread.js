import { LitElement, html, css } from "/web_modules/lit-element.js";

class Bread extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 80%;
      }

      ::slotted(p) {
        padding: 0.5rem 0;
        margin: 0;
        font-weight: 300;
        font-family: "Lato", sans-serif;
      }
    `;
  }
  render() {
    return html`
      <slot></slot>
      <slot></slot>
      <slot></slot>
    `;
  }
}

customElements.define("stellanga-bread", Bread);