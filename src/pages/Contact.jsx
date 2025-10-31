import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Section, Button } from '../components/ui';

const Form = styled.form`
  display: grid;
  gap: .75rem;
  max-width: 720px;
  margin: 0 auto;
  a {
    color: ${({theme}) => theme.primary};
    font-weight: 600;
  }
`;

const Row = styled.div`
  display: grid;
  gap: .75rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: .85rem 1rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  font: inherit;
  outline: none;
  background-color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({theme}) => theme.primary}22; /* leve azul claro no hover */
  }

  &:focus {
    border-color: ${({theme}) => theme.primary}; /* mantém o border azul no foco */
    box-shadow: 0 0 0 4px rgba(11,108,255,.08);
    background-color: white; /* fundo volta ao normal ao clicar */
  }
`;

const Textarea = styled.textarea`
  padding: .85rem 1rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  min-height: 140px;
  resize: vertical;
  font: inherit;
  outline: none;
  background-color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({theme}) => theme.primary}22;
  }

  &:focus {
    border-color: ${({theme}) => theme.primary};
    box-shadow: 0 0 0 4px rgba(11,108,255,.08);
    background-color: white;
  }
`;

const Submit = styled(Button).attrs({ as: 'button' })`
  justify-self: center;
  cursor: pointer;
  background: transparent;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Toast = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: #059669;
  color: white;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  animation: ${fadeIn} .3s ease forwards;
  z-index: 1000;
`;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      date: '',
      message: '',
    });
  }

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  return (
    <Section id="contato" bg="#f9fafb">
      <Container>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Convide a Elga</h2>
        <p style={{ textAlign: 'center', color: '#6b7280', marginTop: 0, marginBottom: '1.25rem' }}>
          Preencha o formulário e conte sobre seu evento. Responderemos em breve.
        </p>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Input
              required
              placeholder="Seu nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              required
              placeholder="Empresa / Organização"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </Row>
          <Row>
            <Input
              required
              placeholder="E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              placeholder="Telefone / WhatsApp"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Row>
          <Input
            placeholder="Data ou período do evento"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <Textarea
            placeholder="Conte um pouco sobre o público, objetivo e duração desejada."
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Submit type="submit">Enviar</Submit>
        </Form>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Se preferir, envie um e-mail para{' '}
          <a href="mailto:elgacosta218@gmail.com">elgacosta218@gmail.com</a>.
        </p>
      </Container>

      {sent && <Toast>Mensagem enviada com sucesso!</Toast>}
    </Section>
  );
}
