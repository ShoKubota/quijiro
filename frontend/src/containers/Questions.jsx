import React, { Fragment, useEffect, useReducer } from 'react';
import styled from 'styled-components';

//apis
import { fetchQuestions } from '../apis/questions';

//reducers
import {
  initialState,
  questionsActionTypes,
  questionsReducer,
} from '../reducers/questions';

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
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      {
        <div>
          { state.question1.title }
        </div>
      }
      {
        state.question1Answers.map(question1Answer => 
          <div>
            { question1Answer.title }
          </div>
        )
      }
      {
        <div>
          { state.question2.title }
        </div>
      }
      {
        state.question2Answers.map(question2Answer => 
          <div>
            { question2Answer.title }
          </div>
        )
      }
      {
        <div>
          { state.question3.title }
        </div>
      }
      {
        state.question3Answers.map(question3Answer => 
          <div>
            { question3Answer.title }
          </div>
        )
      }
    </>
  )
}