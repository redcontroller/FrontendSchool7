import React from 'react';
import styled, {keyframes} from 'styled-components';
import logo from '../img/logo.png';
import back from '../img/logo-back.png';

const Container = styled.header`
    width: 100%;
    height: fit-content;
    /* background-color: greenyellow; */
    `;
const move = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    `;
const H1 = styled.h1``;
const Logo = styled.div`
    width: 60rem;
    margin: 0 auto;
    padding: 9rem 0 5rem 0;
    position: relative;
    /* box-sizing: border-box; */
    /* background-color: palegreen; */

    &::after {
        content: "";
        display: inline-block;
        /* width: 100%; */
        width: 20vw;
        max-width: 20rem;
        background-image: url(${back});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        animation: ${move} 15s linear infinite;
        aspect-ratio: 1/1;
        
        position: absolute;
        top: 18%;
        left: 35%;
        /* left: 35%; */
        /* left: calc(50% - 10vw); */
    }
`;
const ImgLogo = styled.img`
    display: block;
    width: 60vw;
    max-width: 60rem;
    margin: 0 auto;
`;

const P = styled.p`
  width: fit-content;
  color: #FF7499;
  font-family: 'OTEnjoystoriesBA';
  font-size: 2.3rem;
  font-style: normal;
  margin: 0 auto 4.4rem;
`;

export default function Header() {
  return (
    <Container>
        <H1 className='a11y-hidden'>1만 시간의 법칙 계산기</H1>
        <Logo>
            <ImgLogo src={logo} alt="페이지 로고" />
        </Logo>
        <P>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</P>
    </Container>
  )
}
