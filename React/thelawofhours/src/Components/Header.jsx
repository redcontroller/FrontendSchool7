import React from 'react';
import styled, {keyframes} from 'styled-components';
import logo from '../img/logo.png';
import back from '../img/logo-back.png';

const Container = styled.header`
    width: 100%;
    height: fit-content;
    text-align: center;
`;

const move = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const H1 = styled.h1`
    position: relative;
    padding: 13rem 0;

    &::after {
        content: "";
        display: inline-block;
        width: 100%;
        max-width: 20rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url(${back});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        animation: ${move} 15s linear infinite;
        aspect-ratio: 1/1;
    }
`;

const Logo = styled.img`
    display: block;
    width: 50vw;
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
    <>
        <Container>
            <H1>
                <Logo src={logo} alt="1만 시간의 법칙 계산기" />
            </H1>
            <P>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</P>
        </Container>
    </>
  )
}
