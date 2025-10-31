import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/ui';
import banner from '../assets/foto-reflexao.jpeg';

const Wrap = styled.section`
  position: relative;
  padding: 6rem 0;
  color: white;
  background:
    linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.55)),
    url(${banner}) center/cover no-repeat;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.25rem;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
`;

const Carousel = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const Slide = styled.blockquote`
  margin: 0;
  padding: 1.25rem 1.25rem 1rem;
  border-radius: 14px;
  background: rgba(255,255,255,.08);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255,255,255,.15);
  line-height: 1.6;

  position: absolute;
  inset: 0;
  opacity: ${({active}) => (active ? 1 : 0)};
  transform: translateY(${({active}) => (active ? '0px' : '8px')});
  transition: opacity .6s ease, transform .6s ease;
  display: grid;
  align-content: center;
  text-align: center;

  p{ margin: 0 0 .75rem 0; font-size: clamp(1.05rem, 2vw, 1.25rem); }
  cite{ display: block; font-style: normal; opacity: .9; }
`;

const Stage = styled.div`
  position: relative;
  min-height: 160px; /* garante altura do palco */
`;

const Controls = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;
`;

const Dot = styled.button`
  width: 10px; height: 10px; border-radius: 999px;
  border: 0; cursor: pointer;
  background: ${({active}) => (active ? 'white' : 'rgba(255,255,255,.5)')};
  transform: scale(${({active}) => (active ? 1.1 : 1)});
  transition: transform .2s ease, background .2s ease;
`;

const ArrowBtn = styled.button`
  background: rgba(255,255,255,.15);
  border: 1px solid rgba(255,255,255,.35);
  color: white;
  border-radius: 10px;
  padding: .5rem .75rem;
  cursor: pointer;
  backdrop-filter: blur(2px);
  transition: background .2s ease, transform .1s ease;
  &:hover{ background: rgba(255,255,255,.25); }
  &:active{ transform: translateY(1px); }
`;

export default function Frases(){
  const quotes = [
    { text: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.", author: "Nelson Mandela" },
    { text: "Você não pode controlar todos os eventos que acontecem com você, mas pode decidir não ser reduzido por eles.", author: "Maya Angelou" },
    { text: "A única maneira de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs" },
    { text: "Seja a mudança que você deseja ver no mundo.", author: "Mahatma Gandhi" },
    { text: "A escuridão não pode expulsar a escuridão; só a luz pode fazer isso.", author: "Martin Luther King Jr." },
    { text: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.", author: "Eleanor Roosevelt" },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = quotes.length;
  const intervalRef = useRef(null);

  const next = () => setIndex(i => (i + 1) % len);
  const prev = () => setIndex(i => (i - 1 + len) % len);
  const go = (i) => setIndex(i);

  // autoplay com pausa no hover
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <Wrap id="frases" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Container>
        <Title>Frases Motivacionais</Title>

        <Carousel aria-roledescription="carousel">
          <Stage>
            {quotes.map((q, i) => (
              <Slide
                key={i}
                role="group"
                aria-label={`${i + 1} de ${len}`}
                active={i === index}
              >
                <p>“{q.text}”</p>
                <cite>— {q.author}</cite>
              </Slide>
            ))}
          </Stage>

          <Controls>
            <ArrowBtn aria-label="Anterior" onClick={prev}>◀</ArrowBtn>
            {quotes.map((_, i) => (
              <Dot
                key={i}
                aria-label={`Ir para slide ${i + 1}`}
                active={i === index}
                onClick={() => go(i)}
                title={`Slide ${i + 1}`}
              />
            ))}
            <ArrowBtn aria-label="Próximo" onClick={next}>▶</ArrowBtn>
          </Controls>
        </Carousel>
      </Container>
    </Wrap>
  );
}
