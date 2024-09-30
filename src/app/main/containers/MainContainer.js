'use client';
import React from 'react';
import { SectionsContainer, Section, Header } from 'react-fullpage';

const options = {
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
};

const MainContainer = () => {
  return (
    <>
      <Header>
        <a href="#sectionOne">INFO & ABOUT</a>
        <a href="#sectionTwo">EXPERIENCE</a>
        <a href="#sectionThree">PORTFOLIO</a>
      </Header>
      <SectionsContainer {...options}>
        <Section>
          <h1>이력서</h1>
        </Section>
        <Section>
          <h1>Education & Work Experience</h1>
        </Section>
        <Section>
          <h1>Portfolio</h1>
        </Section>
      </SectionsContainer>
    </>
  );
};

export default React.memo(MainContainer);
