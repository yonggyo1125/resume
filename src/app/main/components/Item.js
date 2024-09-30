import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  h2 {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0 0 25px;

    .tit {
      font-size: 1.4rem;
      margin-right: 10px;
    }

    .bar {
      flex-grow: 1;
      height: 2px;
      background: #bcbcbc;
    }
  }
`;

const Item = ({ children, title }) => {
  return (
    <Wrapper>
      <h2>
        <div className="tit">{title}</div>
        <div className="bar"></div>
      </h2>
      <div className="item-content">{children}</div>
    </Wrapper>
  );
};

export default React.memo(Item);
