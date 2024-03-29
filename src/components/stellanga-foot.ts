import { LitElement, html, css } from 'lit-element';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

class Foot extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        padding: 1rem;
      }

      ul {
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 0;
      }

      li {
        display: inline-block;
        margin: 0.5rem;
      }

      a,
      svg {
        display: block;
        color: #ddd;
      }

      svg {
        fill: var(--text-color);
      }

      svg.lin-0:hover > path {
        fill: url(#linear-0);
      }

      svg.lin-1:hover > path {
        fill: url(#linear-1);
      }

      svg.lin-2:hover > path {
        fill: url(#linear-2);
      }

      a {
        background-color: var(--bg-color);
        box-shadow: var(--drop-shadow);
        box-sizing: border-box;
        border-radius: 1.5rem;
        height: 3rem;
        width: 3rem;
      }

      .ir {
        display: block;
        overflow: visible;
        padding: 0 0 100%;
        position: relative;
        height: 0;
        width: 100%;
      }

      .ir > * {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }

      @media (min-width: 640px) {
        li {
          margin: 1.2rem;
        }
      }
    `;
  }
  render() {
    return html`
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/stellangarhammar/"
            title="LinkedIn"
          >
            <div class="ir">
              <svg
                class="lin-${getRandomInt(3)}"
                viewbox="0 0 512 512"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id="linear-0"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#833ab4" />
                    <stop offset="50%" stop-color="#fd1d1d" />
                    <stop offset="100%" stop-color="#fcb045" />
                  </linearGradient>
                  <linearGradient
                    id="linear-1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#56e34a" />
                    <stop offset="50%" stop-color="#48d7d2" />
                    <stop offset="100%" stop-color="#4550fc" />
                  </linearGradient>
                  <linearGradient
                    id="linear-2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#4ac7e3" />
                    <stop offset="50%" stop-color="#486bd7" />
                    <stop offset="100%" stop-color="#a845fc" />
                  </linearGradient>
                </defs>
                <path
                  d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"
                ></path>
              </svg></div
          ></a>
        </li>
        <li>
          <a href="https://github.com/stellanga/" title="GitHub">
            <div class="ir">
              <svg
                class="lin-${getRandomInt(3)}"
                viewbox="0 0 512 512"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id="linear-0"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#833ab4" />
                    <stop offset="50%" stop-color="#fd1d1d" />
                    <stop offset="100%" stop-color="#fcb045" />
                  </linearGradient>
                  <linearGradient
                    id="linear-1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#56e34a" />
                    <stop offset="50%" stop-color="#48d7d2" />
                    <stop offset="100%" stop-color="#4550fc" />
                  </linearGradient>
                  <linearGradient
                    id="linear-2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#4ac7e3" />
                    <stop offset="50%" stop-color="#486bd7" />
                    <stop offset="100%" stop-color="#a845fc" />
                  </linearGradient>
                </defs>
                <path
                  d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"
                ></path>
              </svg></div
          ></a>
        </li>
        <li>
          <a href="https://dribbble.com/stellanga" title="Dribbble">
            <div class="ir">
              <svg
                class="lin-${getRandomInt(3)}"
                viewbox="0 0 512 512"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id="linear-0"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#833ab4" />
                    <stop offset="50%" stop-color="#fd1d1d" />
                    <stop offset="100%" stop-color="#fcb045" />
                  </linearGradient>
                  <linearGradient
                    id="linear-1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#56e34a" />
                    <stop offset="50%" stop-color="#48d7d2" />
                    <stop offset="100%" stop-color="#4550fc" />
                  </linearGradient>
                  <linearGradient
                    id="linear-2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#4ac7e3" />
                    <stop offset="50%" stop-color="#486bd7" />
                    <stop offset="100%" stop-color="#a845fc" />
                  </linearGradient>
                </defs>
                <path
                  d="M256 68.4C152.4 68.4 68.4 152.4 68.4 256c0 103.6 84 187.6 187.6 187.6S443.6 359.6 443.6 256C443.6 152.4 359.6 68.4 256 68.4zM410.6 247.3c-40.3-6.6-77.3-7-111-1.1 -3.8-8.8-7.8-17.6-12-26.3 36.1-15.6 65.1-36.9 86.7-63.8C395.4 181 408.6 212.6 410.6 247.3zM350.5 133.4c-18.8 24.3-44.8 43.5-78 57.5 -15.9-29.1-34-57.5-54.5-85 12.2-3.1 24.9-4.9 38-4.9C291.6 101 324.3 113.2 350.5 133.4zM186.1 117.9c20.8 27.2 39.3 55.3 55.3 84.1 -38 11.2-83.4 16.9-135.8 17.3C116.4 175 146.3 138.1 186.1 117.9zM101 256c0-1.3 0.2-2.7 0.2-4 60.2-0.1 112.1-7 155.6-20.7 3.6 7.4 7.1 14.9 10.5 22.4 -52.8 16.5-96.4 50.4-130.3 101.3C114.5 328.2 101 293.6 101 256zM160.9 378.1c30.8-48.3 70.1-79.7 118.8-94.2 14.5 37.8 25.2 76.8 31.9 116.6 -17.3 6.7-36 10.5-55.6 10.5C220.1 411 187.2 398.6 160.9 378.1zM342 384.8c-6.9-36.8-16.9-72.8-30-107.8 29.3-4.1 61.6-3.1 96.9 3.1C402.1 323.6 377.2 361.3 342 384.8z"
                ></path>
              </svg></div
          ></a>
        </li>
        <li>
          <a href="https://twitter.com/stellanga" title="Twitter">
            <div class="ir">
              <svg
                class="lin-${getRandomInt(3)}"
                viewbox="0 0 512 512"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id="linear-0"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#833ab4" />
                    <stop offset="50%" stop-color="#fd1d1d" />
                    <stop offset="100%" stop-color="#fcb045" />
                  </linearGradient>
                  <linearGradient
                    id="linear-1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#56e34a" />
                    <stop offset="50%" stop-color="#48d7d2" />
                    <stop offset="100%" stop-color="#4550fc" />
                  </linearGradient>
                  <linearGradient
                    id="linear-2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#4ac7e3" />
                    <stop offset="50%" stop-color="#486bd7" />
                    <stop offset="100%" stop-color="#a845fc" />
                  </linearGradient>
                </defs>
                <path
                  d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"
                ></path>
              </svg></div
          ></a>
        </li>
      </ul>
    `;
  }
}

/*

<svg viewbox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient
                    id="linear-1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#833ab4" />
                    <stop offset="50%" stop-color="#fd1d1d" />
                    <stop offset="100%" stop-color="#fcb045" />
                  </linearGradient>
                  <linearGradient
                    id="linear-2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#56e34a" />
                    <stop offset="50%" stop-color="#48d7d2" />
                    <stop offset="100%" stop-color="#4550fc" />
                  </linearGradient>
                  <linearGradient
                    id="linear-3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#4ac7e3" />
                    <stop offset="50%" stop-color="#486bd7" />
                    <stop offset="100%" stop-color="#a845fc" />
                  </linearGradient>
                </defs>
                <path
                  d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"
                ></path>
              </svg>
              */

customElements.define('stellanga-foot', Foot);
