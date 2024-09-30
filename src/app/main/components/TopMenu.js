'use client';
import React from 'react';
import { Header } from 'react-fullpage';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 50px;
  background: #fff;
  a {
    line-height: 50px;
    padding: 0 30px;
    font-size: 1.75rem;
  }
`;

const TopMenu = () => {
  return (
    <Header>
      <StyledNav>
        <a href="#sectionOne">INFO & ABOUT</a>
        <a href="#sectionTwo">EXPERIENCE</a>
        <a href="#sectionThree">PORTFOLIO</a>
      </StyledNav>
    </Header>
  );
};

export default React.memo(TopMenu);
