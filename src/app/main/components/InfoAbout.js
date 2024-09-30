import React from 'react';
import { Section } from 'react-fullpage';
import ProfileImage from './ProfileImage';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 51px;
`;

const InfoAbout = () => {
  return (
    <Section>
      <Wrapper>
        <ProfileImage />
        <div className="layout-width">
          <h1>이력서</h1>
        </div>
      </Wrapper>
    </Section>
  );
};

export default React.memo(InfoAbout);
