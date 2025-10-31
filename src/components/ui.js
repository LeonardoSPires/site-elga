import styled from 'styled-components';

export const Container = styled.div`
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Section = styled.section`
  padding: 4rem 0;
  background: ${({bg})=> bg || 'transparent'};
`;

export const Button = styled.a`
  display: inline-block;
  padding: .8rem 1.25rem;
  border-radius: 999px;
  font-weight: 600;
  border: 2px solid ${({theme})=>theme.primary};
  color: ${({theme})=>theme.primary};
  &:hover{ background: ${({theme})=>theme.primary}; color: white; }
  transition: all .2s ease;
`;