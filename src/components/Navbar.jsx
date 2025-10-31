import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import ImgLogo from '../assets/logo-elga.png';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #eee;
`;

const LogoLink = styled.a`
  display: inline-flex;
  align-items: center;
`;
const LogoNav = styled.img`
  height: 40px;
  border-radius: 50%;
  display: block;
`;

const Wrap = styled.div`
  max-width: var(--maxw);
  margin: 0 auto;
  padding: .75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: .5px;
`;

const MenuBtn = styled.button`
  display: none;
  @media (max-width: 900px){ display: inline-flex; align-items: center; gap: .25rem; }
  background: transparent; border: none; font-size: 1.5rem; cursor: pointer;
`;

const Links = styled.ul`
  display: flex;
  gap: 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 900px){
    position: fixed;
    inset: 0 0 auto 0;
    top: 56px;
    background: white;
    flex-direction: column;
    padding: 1rem;
    border-top: 1px solid #eee;
    display: ${({open}) => open ? 'flex' : 'none'};
  }
`;

const LinkItem = styled.a`
  font-weight: 500;
  color: ${({theme})=>theme.secondary};
  &:hover{ color: ${({theme})=>theme.primary}; }
`;

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o=>!o);
  const close = () => setOpen(false);
  return (
    <Nav>
      <Wrap>
        <LogoLink href="#home" aria-label="Início">
          <LogoNav src={ImgLogo} alt="Logo Elga Cordeiro Costa" loading="lazy" />
        </LogoLink>
        <Brand href="#home">Elga Cordeiro Costa</Brand>
        <MenuBtn onClick={toggle} aria-label="menu">{open ? <FiX/> : <FiMenu/>}</MenuBtn>
        <Links open={open} onClick={close}>
          <li><LinkItem href="#sobre">Sobre</LinkItem></li>
          <li><LinkItem href="#frases">Frases</LinkItem></li>
          <li><LinkItem href="#palestras">Palestras</LinkItem></li>
          <li><LinkItem href="#galeria">Galeria</LinkItem></li>
          <li><LinkItem href="#contato">Contato</LinkItem></li>
        </Links>
      </Wrap>
    </Nav>
  )
}