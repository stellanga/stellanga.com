import { LitElement, html, css } from "/web_modules/lit-element.js";

class Title extends LitElement {
  render() {
    return html`
      <div>stellanga</div>
    `;
  }
}

customElements.define('stellanga-title', Title);