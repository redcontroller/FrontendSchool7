import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  width: fit-content;
  font-size: 4.8%;
  font-weight: 700;
  text-align: center;
  margin: 4.4rem auto;
`;

export default function Main() {
  return (
    <P>1만 시간의 법칙은<br/>
        어떤 분야의 전문가가 되기 위해서는<br/>
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
    </P>
  )
}
