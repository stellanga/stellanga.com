import { LitElement, html, css } from "/web_modules/lit-element.js";

class ThemeToggler extends LitElement {
  static get styles() {
    return css`
      .theme-switch-wrapper {
        display: flex;
        align-items: center;
      }
      .theme-switch {
        display: inline-block;
        height: 34px;
        position: relative;
        width: 60px;
      }

      .theme-switch input {
        display: none;
      }

      .slider {
        background-color: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.4s;
      }

      .slider:before {
        background-color: #fff;
        bottom: 4px;
        content: "";
        height: 26px;
        left: 4px;
        position: absolute;
        transition: 0.4s;
        width: 26px;
      }

      input:checked + .slider {
        background-color: #66bb6a;
      }

      input:checked + .slider:before {
        transform: translateX(26px);
      }

      .slider.round {
        border-radius: 34px;
      }

      .slider.round:before {
        border-radius: 50%;
      }
    `;
  }

  switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }

  render() {
    return html`
      <div class="theme-switch-wrapper">
        <label class="theme-switch" for="checkbox">
          <input type="checkbox" id="checkbox" @change="${this.switchTheme}" />
          <div class="slider round"></div>
        </label>
      </div>
    `;
  }
}

customElements.define("stellanga-theme-toggler", ThemeToggler);
