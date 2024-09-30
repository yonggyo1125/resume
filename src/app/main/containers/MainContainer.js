import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';

const options = {
  anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
};

const MainContainer = () => {
  return (
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
  );
};

export default React.memo(MainContainer);
