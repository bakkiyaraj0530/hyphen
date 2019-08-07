/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_QUESTIONNAIRE,
  LOAD_QUESTIONNAIRE_SUCCESS,
  LOAD_QUESTIONNAIRE_FAILURE,
} from './constants';

// The initial state of the App
export const initialState = {
  questionslist: '',
  loading: false,
  error: '',
};

/* eslint-disable default-case, no-param-reassign */
const questionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_QUESTIONNAIRE:
        draft.questionslist = action.questionList;
        break;
      case LOAD_QUESTIONNAIRE_SUCCESS:
        draft.questionslist = action.questionList;
        break;
      case LOAD_QUESTIONNAIRE_FAILURE:
        draft.error = action.error;
        break;
    }
  });

export default questionReducer;
