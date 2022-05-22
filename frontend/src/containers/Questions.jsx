import React, { Fragment, useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';

//apis
import { fetchQuestions } from '../apis/questions';

// components
import Button from '@material-ui/core/Button';

//reducers
import {
  initialState,
  questionsActionTypes,
  questionsReducer,
} from '../reducers/questions';

//images
import MainLogo from '../images/logo.png';
import Akahige from '../images/akahige.jpg'
import ButayamaNakano from '../images/butayama_nakano.jpg'
import Hibarigaoka from '../images/hibarigaoka.jpg'

const Wrapper = styled.div`
  padding-bottom: 30px;
  background-color: #FAFA65; 
`;

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

const QuestionsList = styled.div`
  width: 30%;
  margin: 0px auto;
`;

const QuestionsContentWrapper = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;
  background: #ffffff;
  margin: 20px 0px;
  border-radius: 10px;
  box-shadow: 0px 2px 2px #C9CACA;
`;

const QuestionsTitle = styled.div`
  text-align: left;
  font-weight: bold;
  padding: 10px 0px;
`;

const Questionsbody = styled.div`
  text-align: left;
`;

const QuestionImage = styled.img`
  width: 100%;
  margin-bottom: 30px;
`;

const AnswerButton = styled(Button)`
  display: block;
  background: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  width: 100%;
  padding: 10px 30px;
  margin-bottom: 15px;
  box-shadow: 0px 2px 2px #C9CACA;
`;

const buttonAlert = (answer) => {
  {answer.correction ? alert('正解！') : alert('不正解！')}
}

export const Questions = () => {

  const [state, dispatch] = useReducer(questionsReducer, initialState);

  useEffect(() => {
    dispatch({ type: questionsActionTypes.FETCHING });
    fetchQuestions()
    .then((data) =>
      dispatch({
        type: questionsActionTypes.FETCHING_SUCCESS,
        payload: {
          question_1: data.question_1,
          question_1_answers: data.question_1_answers,
          question_2: data.question_2,
          question_2_answers: data.question_2_answers,
          question_3: data.question_3,
          question_3_answers: data.question_3_answers,
        }
      })
    )
  }, [])

  return(
    <>
      <Wrapper>
        <HeaderWrapper>
          <MainLogoImage src={MainLogo} alt="main logo" />
        </HeaderWrapper>
        <QuestionsList>
          {/* コンポーネントに切り出せるようにする */}
          <QuestionsContentWrapper>
            <QuestionsTitle>
                <div>
                  { state.question1.title }
                </div>
            </QuestionsTitle>
            <QuestionImage src={Akahige} alt="akahige" />
              {
                state.question1Answers.map(question1Answer => 
                  <AnswerButton variant="contained" onClick={() => buttonAlert(question1Answer)}>
                    {/* 正解or不正解の条件分岐を作る */}
                    { question1Answer.title }
                  </AnswerButton>
                )
              }
              <Questionsbody>
              </Questionsbody>
          </QuestionsContentWrapper>
          <QuestionsContentWrapper>
            <QuestionsTitle>
                <div>
                  { state.question2.title }
                </div>
            </QuestionsTitle>
            <QuestionImage src={ButayamaNakano} alt="butayama_nakano" />
            {
              state.question2Answers.map(question2Answer => 
                <AnswerButton variant="contained" onClick={() => buttonAlert(question2Answer)}>
                  { question2Answer.title }
                </AnswerButton>
              )
            }
          </QuestionsContentWrapper>
          <QuestionsContentWrapper>
            <QuestionsTitle>
                <div>
                  { state.question3.title }
                </div>
            </QuestionsTitle>
            <QuestionImage src={Hibarigaoka} alt="hibarigaoka" />
            {
              state.question3Answers.map(question3Answer => 
                <AnswerButton variant="contained" onClick={() => buttonAlert(question3Answer)}>
                  { question3Answer.title }
                </AnswerButton>
              )
            }
          </QuestionsContentWrapper>
        </QuestionsList>
      </Wrapper>
    </>
  )
}