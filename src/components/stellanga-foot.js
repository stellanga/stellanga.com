import { LitElement, html, css } from "/web_modules/lit-element.js";
import { repeat } from "/web_modules/lit-html/directives/repeat.js";

class Foot extends LitElement {
  render() {
    return html`
      <div>Links in footer?</div>
    `;
  }
}

customElements.define('stellanga-foot', Foot);