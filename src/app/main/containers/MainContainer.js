'use client';
import React from 'react';
import { SectionsContainer, Section, Header } from 'react-fullpage';

const options = {
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
};

const MainContainer = () => {
  return (
    <>
      <SectionsContainer {...options}>
       
        
       
      </SectionsContainer>
    </>
  );
};

export default React.memo(MainContainer);
