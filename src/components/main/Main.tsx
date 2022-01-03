import React from 'react';
import { SELECT_ELEMENTS } from '../../constance/main';
import * as S from './style';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Title>자판기 오작동 신고</S.Title>
      <S.InfoBox>
        <S.SubTitle>신고자 정보</S.SubTitle>
        <S.Description>자판기 오작동 보상을 위해 학생의 정보를 입력해주세요</S.Description>
        <S.SelectBox>
          {SELECT_ELEMENTS.map(ele => {
            return (
              <select key={ele.name} name={ele.name}>
                <option value='' hidden>
                  {ele.placeholder}
                </option>
                {[...Array(ele.num)].map((n, index) => {
                  return (
                    <option value={index + 1} key={index + 1}>
                      {index + 1 + ele.template}
                    </option>
                  );
                })}
              </select>
            );
          })}
        </S.SelectBox>
        <input placeholder='이름' />
      </S.InfoBox>
      <S.ContentBox>
        <S.SubTitle>신고 내용</S.SubTitle>
        <S.Description>자판기 오작동 내용을 적어주세요.</S.Description>
        <S.ContentInputBox>
          <input placeholder='설명'></input>
          <input placeholder='금액'></input>
        </S.ContentInputBox>
      </S.ContentBox>
      <button>신고하기</button>
    </S.Wrapper>
  );
};

export default Main;
