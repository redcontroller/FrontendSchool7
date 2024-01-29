import React from 'react';
import styled from 'styled-components';
import click from '../img/click_hand.png';

const Container = styled.main``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
const P = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
`;
const BtnWrap = styled.div`
  position: relative;
  margin-bottom: 5rem;
`;
const Btn = styled.button``;
const ImgClick = styled.img`
  width: 10rem;
  max-width: 7rem;
  position: absolute;
  top: 20px;
`;
const FormContent = styled.div`
  display: flex;
  width: 100vw;
  height: 38vh;
  flex-direction: column;
  justify-content: space-evenly;
`;
const InputBig = styled.input`
  width: 30rem;
  `;
const InputSmall = styled.input`
  width: 15rem;
  `;
const Strong = styled.strong`
  font-size: 6rem;
  vertical-align: middle;
  padding: 0 2rem;
`;
const BtnShare = styled.button`
  background-color: white;
  margin-left: 2rem;
`;

export default function Main() {
  let result = true;

  return (
      <Container>
        {result ?
        (<Form>
          <FormContent>
              <P>당신은<Strong>프론트엔드</Strong>전문가가 되기 위해서</P>
              <P>대략<Strong>5110</Strong>일 이상 훈련하셔야 합니다! 🔥</P>
          </FormContent>
          <BtnWrap>
            <Btn type="submit">
              훈련하러 가기 GO!GO!
            </Btn>
            <BtnShare type="submit">
              공유하기
            </BtnShare>
          </BtnWrap>
        </Form>)
        : (
        <Form>
          <FormContent>
            <P>나는 <InputBig type="text" placeholder='ex. 프로그래머' /> 전문가가 될 것이다.</P>
            <P>그래서 앞으로 매일 하루에 <InputSmall type="text"  placeholder='ex. 10' /> 시간씩 훈련할 것이다.</P>
          </FormContent>
          <BtnWrap>
            <Btn type="submit">
              나는 며칠 동안 훈련을 해야 1만 시간이 될까?
            </Btn>
            <ImgClick src={click} alt="클릭하여 훈련일 수 계산하기" />
          </BtnWrap>
        </Form>
        )}
      </Container>
  )
}
