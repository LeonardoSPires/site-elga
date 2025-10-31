import React from 'react';
import styled from 'styled-components';
import { Container, Section, Button } from '../components/ui';
import { FiTarget, FiUsers, FiSmile } from 'react-icons/fi';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  @media (max-width: 900px){ grid-template-columns: 1fr; }
`;

const Card = styled.div`
  background: white; border: 1px solid #eee; border-radius: 16px;
  padding: 1.25rem; box-shadow: 0 10px 24px rgba(0,0,0,.04);
  display: grid; gap: .5rem;
`;

const Icon = styled.div`
  font-size: 1.75rem; color: ${({theme})=>theme.primary};
`;

const CTA = styled.div`
  text-align: center; margin-top: 1.5rem;
`;

export default function Talks(){
  return (
    <Section id="palestras" bg="#f9fafb">
      <Container>
        <h2 style={{textAlign:'center', marginBottom:'1.5rem'}}>Palestras & Workshops</h2>
        <Grid>
          <Card>
            <Icon><FiTarget/></Icon>
            <h3>Propósito em Ação</h3>
            <p>Como alinhar valores pessoais e metas da empresa para criar engajamento e resultados consistentes.</p>
          </Card>
          <Card>
            <Icon><FiUsers/></Icon>
            <h3>Comunicação que Conecta</h3>
            <p>Ferramentas práticas para equipes colaborarem melhor, reduzirem ruídos e aumentarem a confiança.</p>
          </Card>
          <Card>
            <Icon><FiSmile/></Icon>
            <h3>Bem‑Estar e Alta Performance</h3>
            <p>Mindset, energia e hábitos que levam times a entregarem mais com leveza e motivação.</p>
          </Card>
        </Grid>
        <CTA>
          <Button href="#contato">Quero levar para minha empresa</Button>
        </CTA>
      </Container>
    </Section>
  )
}