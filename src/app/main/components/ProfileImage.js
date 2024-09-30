import React from 'react';
import styled from 'styled-components';

const ProfileImage = ({ className }) => {
  return (
    <div className={className}>
      <div className="layout-width">
        <div className="tit">
          <span>RESUME</span>
          이이름
        </div>
      </div>
    </div>
  );
};

const StyledProfileImage = styled(ProfileImage)`
  background: #bcbcbc;
  height: 350px;
  padding: 50px 30px 10px;
  position: relative;

  .tit {
    position: absolute;
    bottom: 10px;
    font-size: 1.15rem;

    span {
      font-size: 1.75rem;
      margin-right: 10px;
    }
  }
`;

export default React.memo(StyledProfileImage);
