import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Section, Button } from '../components/ui';
import bioImg from '../assets/foto-biografia.jpeg';
import videoAbout from '../assets/video-about.mp4';

const AboutSection = styled(Section)`
  position: relative;
  overflow: hidden;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 900px){
    grid-template-columns: 1fr;
  }
`;

const ImgWrap = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0,0,0,.07);
  width: 100%;
  position: relative;
  z-index: 1;
`;

const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Lead = styled.p`
  font-size: 1.125rem;
  color: ${({theme}) => theme.text};
  position: relative;
  z-index: 1;
`;

// animação suave pro vídeo “surgir”
const fadeInVideo = keyframes`
  from { opacity: 0; transform: scale(1.02); }
  to   { opacity: 0.5; transform: scale(1); }
`;

// vídeo de fundo ocupando toda a seção
const VideoBg = styled.video`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.25;          /* controla quão “forte” o vídeo aparece */
  filter: blur(1px);       /* opcional: deixa o fundo mais suave */
  animation: ${fadeInVideo} .7s ease forwards;
  z-index: 0;
`;

// leve overlay pra dar contraste pro texto
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(255,255,255,0.1),
    rgba(255,255,255,0.1),
    rgba(255,255,255,0.2)
  );
  z-index: 0;
`;

export default function About(){
  const [showVideo, setShowVideo] = useState(false);
  const sectionRef = useRef(null);

  // delay de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AboutSection id="sobre" ref={sectionRef}>
      {showVideo && (
        <>
          <VideoBg
            src={videoAbout}
            autoPlay
            muted
            loop
            playsInline
          />
          <Overlay />
        </>
      )}

      <Container>
        <Grid>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2>Sobre Elga</h2>
            <Lead>
              Palestrante motivacional reconhecida por inspirar pessoas e equipes a acreditarem
              no próprio potencial e alcançarem resultados extraordinários. Sua missão é despertar a autoconfiança, a
              resiliência e a paixão em cada indivíduo, conectando emoção, propósito e ação de forma autêntica.
            </Lead>

            <p style={{ position: 'relative', zIndex: 1 }}>
              Com uma trajetória de mais de uma década dedicada ao desenvolvimento humano, Elga já impactou milhares
              de pessoas em empresas, escolas, instituições e eventos em todo o país. Suas palestras unem emoção, humor
              e storytelling, transformando cada encontro em uma experiência de aprendizado leve e marcante.
            </p>

            <p style={{ position: 'relative', zIndex: 1 }}>
              Formada e especialista em Inteligência Emocional, Neuro Ciência, Liderança Positiva, Elga acredita que
              a verdadeira mudança começa dentro de cada um de nós. Como se trata de uma especialista em Freemind (Dr. Algusto Cury) sua abordagem prática e empática ajuda equipes a
              redescobrirem o propósito, enxergarem oportunidades em meio aos desafios e cultivarem uma cultura de
              colaboração e entusiasmo.
            </p>

            <p style={{ position: 'relative', zIndex: 1 }}>
              Além das palestras, Elga conduz workshops e mentorias que abordam temas como produtividade com propósito,
              comunicação assertiva e equilíbrio emocional. Ela acredita que o sucesso é uma construção diária feita de
              atitude, coragem e autoconhecimento — e que todo ser humano tem dentro de si o poder de se reinventar.
            </p>

            <Button href="#contato">Convidar para um evento</Button>
          </div>

          <ImgWrap>
            <ImgStyled
              src={bioImg}
              alt="Elga Cordeiro Costa"
              loading="lazy"
            />
          </ImgWrap>
        </Grid>
      </Container>
    </AboutSection>
  );
}
