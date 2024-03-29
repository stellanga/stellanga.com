import { LitElement, html, css } from 'lit-element';

class Head extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: flex-end;
        padding: 1rem;
      }
    `;
  }
  render() {
    return html` <slot></slot> `;
  }
}

customElements.define('stellanga-header', Head);
