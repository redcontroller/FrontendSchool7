import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, subtractNumber } from '../modules/goodsCounter';
import styled from 'styled-components';

const H1 = styled.h1`
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
`;

const H2 = styled.h2`
    font-size: 32px;
    font-weight: 500;

    &::before {
        content: "프론트글로벌";
        display: block;
        color: gray;
        font-size: 12px;
        margin: 12px 0;
    }
`;

const Strong = styled.strong`
    font-size: 32px;
    font-family: 'Pretendard-Regular', sans-serif;
`;

const Span = styled.span`
    display: inline-block;
    padding: 15px 0 110px;
`;

const P = styled.p`
    font-size: 14px;
    color: gray;
`;

const Div = styled.div`
    width:100%;
    height: fit-content;
    padding: 30px 0;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    margin: 20px 0 40px;
`;

const ButtonLeft = styled.button`
    background-color: white;
    border: solid 0.5px lightgray;
    border-radius: 5px 0 0 5px;
`;

const ButtonRight = styled.button`
    background-color: white;
    border: solid 0.5px lightgray;
    border-radius: 0 5px 5px 0; 
`;

export default function GoodsCounter() {

    // store의 state에 접근하도록 합니다.
    const { stock, goods } = useSelector((state) => {
        return {
            stock: state.goodsReducer.stock,
            goods: state.goodsReducer.goods,
        }
    });

    const dispatch = useDispatch();

    // 디스패치 함수에 액션을 인자로 전달하여 실행합니다.
    const onSubtractNumber = () => dispatch(subtractNumber());
    const onAddNumber = () => dispatch(addNumber());


    return (
        <>
            <H1>Product Detail</H1>
            <H2>프론트 개발자 전동 칫솔</H2>
            <Span><Strong>17,500</Strong> 원</Span>
            <P>택배배송 / 무료배송</P>
            <Div id="counter-box">
                <ButtonLeft type="button" id="minus" onClick={onSubtractNumber} disabled={goods > 0 ? false : true}>MINUS</ButtonLeft>
                <span id="number">{goods}</span>
                <ButtonRight type="button" id="plus" onClick={onAddNumber} disabled={stock > 0 ? false : true}>PLUS</ButtonRight>
            </Div>
            <div>총 수량 <strong id="quantity">{goods}</strong></div>
            <div><strong id="total">{goods * 17500}</strong>원</div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
        </>
    )
}