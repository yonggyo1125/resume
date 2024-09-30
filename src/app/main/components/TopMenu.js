'use client';
import React from 'react';
import { Header } from 'react-fullpage';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  height: 50px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
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
