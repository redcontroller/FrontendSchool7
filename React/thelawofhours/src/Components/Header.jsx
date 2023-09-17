import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';

const Container = styled.header`
    display: flex;
    justify-content: center;
`;

const H1_A11y = styled.h1`
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
`;

const Logo = styled.img`
    display: inline-block;
    width: 50vw;
`;

export default function Header() {
  return (
    <Container>
        <H1_A11y>1만 시간의 법칙 계산기</H1_A11y>
        <Logo src={logo} alt="메인 로고" />
    </Container>
  )
}
