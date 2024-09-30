import React, { useState, useCallback } from 'react';
import { Section } from 'react-fullpage';
import Image from 'next/image';
import styled from 'styled-components';

const Tab1Content = () => {
  return (
    <>
      <Image
        src="/images/profile.png"
        width={250}
        height={250}
        alt="포트폴리오 이미지"
      />
      <div>내용....</div>
      <a href="#" target="_blank">
        포트폴리오 보기
      </a>
    </>
  );
};

const Tab2Content = () => {
  return (
    <>
      <Image
        src="/images/profile.png"
        width={250}
        height={250}
        alt="포트폴리오 이미지"
      />
      <div>내용....</div>
      <a href="#" target="_blank">
        포트폴리오 보기
      </a>
    </>
  );
};

const Tab3Content = () => {
  return (
    <>
      <Image
        src="/images/profile.png"
        width={250}
        height={250}
        alt="포트폴리오 이미지"
      />
      <div>내용....</div>
      <a href="#" target="_blank">
        포트폴리오 보기
      </a>
    </>
  );
};

const items = {
  tab1: {
    title: '제목1',
    Content: Tab1Content,
  },
  tab2: {
    title: '제목2',
    Content: Tab2Content,
  },
  tab3: {
    title: '제목3',
    Content: Tab3Content,
  },
};

const Wrapper = styled.div``;

const Portfolio = () => {
  const [item, setItem] = useState(items.tab1);
  const [tab, setTab] = useState('tab1');

  const onClick = useCallback((tab) => {
    setItem(items[tab]);
    setTab(tab);
  }, []);

  const { title, Content } = item;

  return (
    <Section>
      <Wrapper className="layout-width">
        <h2>PORTFOLIO</h2>

        <ul className="tab-group">
          <li onClick={() => onClick('tab1')}>포켓몬 도감</li>
          <li onClick={() => onClick('tab2')}>HIDOG</li>
          <li onClick={() => onClick('tab3')}>상담관리</li>
        </ul>
      </Wrapper>
    </Section>
  );
};

export default React.memo(Portfolio);
