import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  background: ${({theme})=>theme.secondary};
  color: white;
  padding: 2rem 1rem;
  margin-top: 3rem;
`;

const Wrap = styled.div`
  max-width: var(--maxw); margin: 0 auto;
  display: grid; gap: .75rem;
`;

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <Foot>
      <Wrap>
        <div><strong>Elga Cordeiro Costa</strong> — Palestrante motivacional</div>
        <small>© {year} Todos os direitos reservados.</small>
      </Wrap>
    </Foot>
  )
}