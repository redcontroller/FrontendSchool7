import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import clickImg from '../img/click_hand.png';

const initialValue = {
  field: "",
  hour: 0,
};

export default function Main() {
  const [state, setState] = useState(initialValue);
  const inputRefMap = useRef(new Map());
  const setInputRef = (node) => {
    if (node !== null) inputRefMap.current.set(node.name, node);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    for (const [name, value] of formData) {
      if (value === "") return inputRefMap.current.get(name)?.focus();
    }

    const newInfo = Object.fromEntries(formData.entries());
    
    setState(newInfo);
    if (newInfo.hour !== "0") {
      inputRefMap.current.set("period", Math.ceil(10_000 / Number(newInfo.hour)));   
    }

    e.currentTarget.reset();
  }

  return (
      <Container>
        {state.field === "" ?
        (
        <Form onSubmit={onSubmit}>
          <FormContent>
            <P>
              나는
              <input
                ref={setInputRef}
                name='field'
                type="text"
                placeholder='ex. 프로그래머'
                required
                style={{width: "30rem"}}
              />
              전문가가 될 것이다.
            </P>
            <P>
              그래서 앞으로 매일 하루에
              <input 
                ref={setInputRef}
                name='hour'
                type="number"
                placeholder='ex. 10'
                required
                style={{width: "15rem"}}
              />
              시간씩 훈련할 것이다.
            </P>
          </FormContent>
          <BtnWrap>
            <Btn type="submit">
              나는 며칠 동안 훈련을 해야 1만 시간이 될까?
            </Btn>
            <ImgClick src={clickImg} alt="클릭하여 훈련일 수 계산하기" />
          </BtnWrap>
        </Form>
        ) :
        (<Form>
          <FormContent>
              <P>당신은<Strong>{state.field}</Strong>전문가가 되기 위해서</P>
              <P>
                대략
                <Strong>
                  {inputRefMap.current.get("period") || <span>&#8734;</span>}
                </Strong>
                일 이상 훈련하셔야 합니다! 🔥
              </P>
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
      }
      </Container>
  )
};

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
const Strong = styled.strong`
  font-size: 6rem;
  vertical-align: middle;
  padding: 0 2rem;
`;
const BtnShare = styled.button`
  background-color: white;
  margin-left: 2rem;
`;