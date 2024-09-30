import React from 'react';
import { Section } from 'react-fullpage';
import Image from 'next/image';

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

const items = {
  tab1: {
    title: '제목',
    content: Tab1Content,
  },
};

const Portfolio = () => {
  return (
    <Section>
      <h1>Portfolio</h1>
    </Section>
  );
};

export default React.memo(Portfolio);
