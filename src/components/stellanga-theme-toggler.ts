import { LitElement, html, css } from 'lit-element';

class ThemeToggler extends LitElement {
  firstUpdated() {
    const currentTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : null;

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        console.log('dark theme in local storage');
        const toggleSwitch = this.shadowRoot.querySelector(
          '.theme-switch input[type="checkbox"]',
        );
        toggleSwitch.checked = true;
      }
    }
  }

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
        border-radius: 34px;
        box-shadow: var(--drop-shadow);
      }

      .theme-switch input {
        display: none;
      }

      .slider {
        box-shadow: var(--drop-shadow);
        background-color: var(--slider-bgcolor);
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.4s;
      }

      .slider:before {
        background-color: var(--slider-knob-bgcolor);
        bottom: 4px;
        content: '';
        height: 26px;
        left: 4px;
        position: absolute;
        transition: 0.4s;
        width: 26px;
      }

      input:checked + .slider {
        background-color: var(--slider-bgcolor);
      }

      input:checked + .slider:before {
        background-color: var(--slider-knob-bgcolor);
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
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
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

customElements.define('stellanga-theme-toggler', ThemeToggler);
