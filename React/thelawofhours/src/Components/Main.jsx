import React from 'react';
import styled from 'styled-components';
import click from '../img/click_hand.png';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
const P = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;
const Strong = styled.strong`
  font-size: 2.2rem;
`;
const Pbig = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
`;
const BtnWrap = styled.div`
  position: relative;
`;
const Button = styled.button`
  margin-bottom: 10rem;
`;
const ImgClick = styled.img`
  width: 10rem;
  max-width: 7rem;
  position: absolute;
  top: 20px;
`;
const FormContent = styled.div`
  display: flex;
  width: 100vw;
  height: 35vh;
  flex-direction: column;
  justify-content: space-evenly;
`;
const InputBig = styled.input`
  width: 30rem;
  `;
const InputSmall = styled.input`
  width: 15rem;
  `;

export default function Main() {
  return (
    <Form>
      <P><Strong>1만 시간의 법칙은</Strong><br/>
          어떤 분야의 전문가가 되기 위해서는<br/>
          최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </P>
      <FormContent>
        <Pbig>나는 <InputBig type="text" placeholder='ex. 프로그래머' /> 전문가가 될 것이다.</Pbig>
        <Pbig>그래서 앞으로 매일 하루에 <InputSmall type="text"  placeholder='ex. 10' /> 시간씩 훈련할 것이다.</Pbig>
      </FormContent>
        <BtnWrap>
          <Button type="submit">
            나는 며칠 동안 훈련을 해야 1만 시간이 될까?
          </Button>
          <ImgClick src={click} alt="클릭하여 훈련일 수 계산하기" />
        </BtnWrap>
    </Form>
  )
}
