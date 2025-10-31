import React from 'react';
import styled from 'styled-components';
import { Container, Section, Button } from '../components/ui';
import bioImg from '../assets/foto-biografia.jpeg';

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  @media (max-width: 900px){ grid-template-columns: 1fr; justify-content: center; align-items: center; text-align: center;  padding: 0; }
`;

const ImgWrap = styled.div`
  border-radius: 16px; overflow: hidden; box-shadow: 0 10px 24px rgba(0,0,0,.07);
`;

const Lead = styled.p`
  font-size: 1.125rem;
  color: ${({theme})=>theme.muted};
`;

export default function About(){
  return (
    <Section id="sobre">
      <Container>
        <Grid>
          <div>
            <h2>Sobre Elga</h2>
            <Lead>
            Palestrante motivacional, Elga Cordeiro Costa inspira pessoas e organizações a alcançarem resultados extraordinários
            por meio de autoconhecimento, comunicação eficaz e mentalidade de crescimento.
            </Lead>
            <p>
            Com uma trajetória marcada por treinamentos, workshops e keynotes em empresas, escolas e eventos, Elga une histórias reais,
            humor leve e técnicas práticas para transformar atitude em ação.
            </p>
            <Button href="#contato">Convidar para um evento</Button>
          </div>
          <ImgWrap>
            <img src={bioImg} alt="Elga Cordeiro Costa" loading="lazy"/>
          </ImgWrap>
        </Grid>
      </Container>
    </Section>
  )
}