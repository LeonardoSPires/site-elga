import React from 'react';
import styled from 'styled-components';
import { Container, Section, Button } from '../components/ui';
import bioImg from '../assets/foto-biografia.jpeg';

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  @media (max-width: 900px){ grid-template-columns: 1fr; }
`;

const ImgWrap = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0,0,0,.07);
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
              Elga Cordeiro Costa é uma palestrante motivacional reconhecida por inspirar pessoas e equipes a acreditarem no próprio potencial e alcançarem resultados extraordinários.
              Sua missão é despertar a autoconfiança, a resiliência e a paixão em cada indivíduo, conectando emoção, propósito e ação de forma autêntica.
            </Lead>

            <p>
              Com uma trajetória de mais de uma década dedicada ao desenvolvimento humano, Elga já impactou milhares de pessoas em empresas, escolas, instituições e eventos em todo o país.
              Suas palestras unem emoção, humor e storytelling, transformando cada encontro em uma experiência de aprendizado leve e marcante.
            </p>

            <p>
              Formada e especialista em Inteligência Emocional e Liderança Positiva, Elga acredita que a verdadeira mudança começa dentro de cada um de nós.
              Sua abordagem prática e empática ajuda equipes a redescobrirem o propósito, a enxergarem oportunidades em meio aos desafios e a cultivarem uma cultura de colaboração e entusiasmo.
            </p>

            <p>
              Além das palestras, Elga conduz workshops e mentorias que abordam temas como produtividade com propósito, comunicação assertiva e equilíbrio emocional.
              Ela acredita que o sucesso é uma construção diária feita de atitude, coragem e autoconhecimento — e que todo ser humano tem dentro de si o poder de se reinventar.
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
