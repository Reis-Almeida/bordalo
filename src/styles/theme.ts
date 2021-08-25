import { css } from 'styled-components'

const theme = {
    fonts: {
      body: 'system-ui, sans-serif',
      heading: '"Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
    },
    anchors: {
      light: css`
        color: #808080;
        &:hover {
          color: #01661c;
        }
      ` ,
      fotoIcones: css`
        background-color: #333;
        &:hover {
          background-color: #0093d1;
        }
      `,
      white: css`
        color: #fff;
        &:hover {
          color: #0093d1;
        }
      `,
      primary: css`
        background-color: #0093d1;
        &:hover {
          background-color: #00aeef;
        }
      `,
      primaryFont: css`
        color: #0093d1;
        &:hover {
          color: #00aeef,
        }
      `,
      pagination: css`
        color: #0093d1;
        background-color: #fff;
        border: 1px solid #0093d1;
        &:hover {
          color: #fff;
          background-color: #0093d1;
        }
      `,
      selected: css`
        color: #fff;
        background-Color: #0093d1;
      `,
    },

    buttons: {
      primary: css`
         color: #fff;
        background-color: #0093d1;
        &:hover {
          background-color: #00aeef;
        }
      `,
      secondary: css`
        color: #fff;
        background-color: #00027a;
        &:hover {
          background-color: #000157;
        }
      `,
    },

    links: css`
       color: #0093d1;
      &:hover {
        background-color: #00aeef;
      }
    `,
    colors: {
      title: '#474747',
      primary: '#0093d1',
      secondary: '#00027a',
      deactivated: '#444',
      text: '#000',
      card: '#222',
      spotlight: '#007a5e',
      white: '#fff',
      background: '#f5f5f5',
      backgroundLighter: "#eee",
      bgHeader: "#fff",
      bgCard: "#fff",
      bgOpacity: "rgb(228, 228, 228, .88)"
    },
    modes: {
      dark: {
        colors: {
          title: '#474747',
          primary: '#01661c',
          secondary: '#00027a',
          deactivated: '#444',
          text: '#fff',
          card: '#222',
          spotlight: '#007a5e',
          white: '#fff',
          background: '#f0f0f0'
        },
        primary: '#0cf',
      }
    }
}

export default theme