// src/pages/Gallery.jsx
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Container, Section } from '../components/ui';

/**
 * IMPORTA AUTOMATICAMENTE TODAS AS IMAGENS DA PASTA:
 * Coloque suas fotos em: src/assets/galeria
 * Extensões suportadas: png, jpg, jpeg, webp, avif
 */
const modules = import.meta.glob('../assets/galeria/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  as: 'url',
});

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .75rem;
  @media (max-width: 900px){ grid-template-columns: 1fr 1fr; }
`;

const Tile = styled.figure`
  margin: 0;
  overflow: hidden;
  border-radius: 12px;
  background: #eee;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .35s ease;
    display: block;filter: blur(2px);
  }
  &:hover 
  img{ 
    transform: scale(1.05); 
    filter: blur(1.5px);
    }
`;

export default function Gallery(){
  // Ordena pelas chaves (caminho do arquivo) com lógica "natural"
  const images = useMemo(() => {
    return Object.entries(modules)
      .sort(([a],[b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map(([, url]) => url);
  }, []);

  return (
    <Section id="galeria">
      <Container>
        <h2 style={{textAlign:'center', marginBottom:'1rem'}}>Momentos & Eventos</h2>
        <Grid>
          {images.map((src, i) => (
            <Tile key={i}>
              <img src={src} alt={`galeria ${i + 1}`} loading="lazy" />
            </Tile>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
