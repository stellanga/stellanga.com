import { LitElement, html, css } from "/web_modules/lit-element.js";

class Bread extends LitElement {
  static get styles() {
    return css`
      * {
        color: red;
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
