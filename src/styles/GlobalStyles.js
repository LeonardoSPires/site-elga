import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html { scroll-behavior: smooth; }
  :root{
    --maxw: 1200px;
  }
  *{ box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji';
    color: ${({theme})=>theme.text};
    background: ${({theme})=>theme.background};
    line-height: 1.6;
  }
  img { max-width: 100%; display: block; }
  a { color: ${({theme})=>theme.primary}; text-decoration: none; }
  h1,h2,h3 { margin: 0 0 .5rem 0; line-height: 1.2; }
`;

export const theme = {
  primary: '#0b6cff',
  secondary: '#111827',
  accent: '#f59e0b',
  background: '#fff',
  text: '#111827',
  muted: '#6b7280',
  surface: '#f5f7fb'
};