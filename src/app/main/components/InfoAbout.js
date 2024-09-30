import React from 'react';
import { Section } from 'react-fullpage';
import ProfileImage from './ProfileImage';

const InfoAbout = () => {
  return (
    <Section>
      <ProfileImage />
      <h1>이력서</h1>
    </Section>
  );
};

export default React.memo(InfoAbout);
