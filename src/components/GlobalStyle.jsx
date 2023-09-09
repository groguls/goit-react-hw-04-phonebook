import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin: 0;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img{
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

export const PageWrapper = styled.div`
  background-color: #fcfcfc;
  padding: 50px;
  height: 100vh;
`;

export const ContactListWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  padding: 25px 50px;
  border-radius: 5px;
  border: 2px #e1ecf4 solid;
  box-shadow: inset 0 0 15px 4px rgba(0, 149, 255, 0.15);
`;

export const MainTitle = styled.h1`
  margin-bottom: 20px;
  color: #2c5777;
`;

export const Title = styled.h2`
  color: #2c5777;
`;
