import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';

//apis
import { fetchQuestions } from '../apis/questions';

//images
import MainLogo from '../images/logo.png';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
  background-color: #ffffff;
  box-shadow: 0px 2px 2px #C9CACA;
`;

const MainLogoImage = styled.img`
  height: 30px;
`;

export const Questions = () => {

  useEffect(() => {
    fetchQuestions()
    .then((data) =>
      console.log(data)
    )
  }, [])

  return(
    <>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      問題一覧
    </>
  )
}