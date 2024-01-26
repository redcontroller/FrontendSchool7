import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  width: fit-content;
  margin: 4.4rem auto;
`

const P = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;

const Strong = styled.strong`
  font-size: 2.2rem;
`
const Button = styled.button`
  width: 60rem;
  height: 5.8rem;
  border-radius: 5.6rem;
  color: #FF5381;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.50);
  margin: 10rem 0;
`

const Form = styled.form`
  padding-top: 10rem;
`

export default function Main() {
  return (
    <>
      <Description>
        <P><Strong>1만 시간의 법칙은</Strong><br/>
            어떤 분야의 전문가가 되기 위해서는<br/>
            최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </P>
      </Description>
      <Form>
        <div>
          <P>나는 <input type="text" placeholder='프로그래머' /> 전문가가 될 것이다.</P>
          <P>그래서 앞으로 매일 하루에 <input type="text" /> 시간씩 훈련할 것이다.</P>
        </div>
        <Button type="submit">
          <P><Strong>나는 며칠 동안 훈련을 해야 1만 시간이 될까?</Strong></P>
        </Button>
      </Form>
    </>
  )
}
