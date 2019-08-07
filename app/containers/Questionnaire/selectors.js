/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectQuestion = state => state.question || initialState;

const makeSelectQuestionList = () =>
  createSelector(
    selectQuestion,
    questionState => questionState.questionslist,
  );
const makeSelectloading = () =>
  createSelector(
    selectQuestion,
    questionState => questionState.loading,
  );
const makeSelecterror = () =>
  createSelector(
    selectQuestion,
    questionState => questionState.error,
  );

export {
  selectQuestion,
  makeSelectQuestionList,
  makeSelectloading,
  makeSelecterror,
};
