import React from 'react';
import { Header } from 'react-fullpage';

const TopMenu = () => {
  return (
    <Header>
      <a href="#sectionOne">INFO & ABOUT</a>
      <a href="#sectionTwo">EXPERIENCE</a>
      <a href="#sectionThree">PORTFOLIO</a>
    </Header>
  );
};

export default React.memo(TopMenu);
