import { REQUEST_STATE } from "../constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  question1: [],
  question1Answers: [],
  question2: [],
  question2Answers: [],
  question3: [],
  question3Answers: [],
};

export const questionsActionTypes = {
  FETCHING: 'FETCHING',
  FETCHING_SUCCESS: 'FETCH_SUCCESS',
}

export const questionsReducer = (state, action) => {
  switch (action.type) {
    case questionsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case questionsActionTypes.FETCHING_SUCCESS:
      return {
        fetchiState: REQUEST_STATE.OK,
        question1: action.payload.question_1,
        question1Answers: action.payload.question_1_answers,
        question2: action.payload.question_2,
        question2Answers: action.payload.question_2_answers,
        question3: action.payload.question_3,
        question3Answers: action.payload.question_3_answers,
      };
    default:
      throw new Error();
  }
}