import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        @font-face {
          font-family: 'TmoneyRoundWindExtraBold';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff')
            format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'TmoneyRoundWindRegular';
          src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindRegular.woff')
            format('woff');
          font-weight: normal;
          font-style: normal;
        }

        body {
          font-family: 'TmoneyRoundWindRegular', sans-serif;
          background: #f5f5f5;
        }

        a {
          text-decoration: none;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        button {
          font-family: 'TmoneyRoundWindRegular', sans-serif;
        }

        input {
          font-family: 'TmoneyRoundWindRegular', sans-serif;
        }
      `}
    />
  );
}
