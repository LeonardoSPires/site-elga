import React from 'react';
import styled from 'styled-components';
import { Button, Container } from './ui';
import heroImg from '../assets/foto-banner-hero.jpg';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Wrap = styled.div`
  height: 100vh;
  position: relative;
  min-height: 72vh;
  display: grid;
  align-items: center;
  ;
  background: linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.55)),
    url(${heroImg}) center/cover no-repeat;
  color: white;

  @media (max-width: 900px) { 
    background: linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.55)),
    url(${heroImg}) right no-repeat;
   }
`;

const Content = styled.div`
  padding: 18rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 6vw, 4rem);
  margin-bottom: .5rem;
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  max-width: 750px;
  opacity: .95;
`;

const Ctas = styled.div`
  margin-top: 1.25rem;
  display: flex;
  gap: .75rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Socials = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  font-size: 1.6rem;

  a {
    color: white;
    transition: color .2s ease;
  }

  a:hover {
    color: ${({theme}) => theme.accent};
  }
`;

export default function Hero() {
  return (
    <Wrap id="home" role="banner">
      <Container>
        <Content>
          <Title>Desperte o seu melhor!</Title>
          <Subtitle>
            Palestrante motivacional com especialidade em Freemind (Dr. Augusto Cury) ,
            produtividade e cultura positiva.
          </Subtitle>

          <Socials>
            <a
              href="https://www.instagram.com/elgapsic?igsh=MXBzaTlocDQ4Mm5tdg==/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://vt.tiktok.com/ZSy75f8XC/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/share/1bSQHE7AL5/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </Socials>

          <Ctas>
            <Button href="#palestras">Conheça as palestras</Button>
            <Button href="#contato" style={{ borderColor: 'white', color: 'white' }}>
              Fale conosco
            </Button>
          </Ctas>
        </Content>
      </Container>
    </Wrap>
  );
}
