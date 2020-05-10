import { LitElement, html, css } from "/web_modules/lit-element.js";

class Head extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('stellanga-header', Head);