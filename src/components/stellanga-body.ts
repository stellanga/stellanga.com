import { LitElement, html, css } from 'lit-element';

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

customElements.define('stellanga-body', Body);
