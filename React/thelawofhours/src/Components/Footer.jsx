import React from 'react';
import styled from 'styled-components';
import weniv from '../img/weniv_logo.png';

const Container = styled.footer`
  width: 100%;
`;

const Img = styled.img`
  width: 15%;
  max-width: 13rem;
  margin: 1.7rem auto;
`;

const P = styled.p`
  width: fit-content;
  color: rgba(255, 255, 255, 0.70);
  font-size: 0.9rem;
  font-family: 'Noto Sans KR';
  margin: 0 auto 3.2rem;
  text-align:center;
`;

export default function Footer() {
  return (
    <Container>
        <Img src={weniv} alt='위니브 로고' />
        <P>※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br/> 수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</P>
    </Container>
  )
}
