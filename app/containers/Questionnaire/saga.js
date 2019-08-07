/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

// import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';
import { LOAD_QUESTIONNAIRE } from './constants';
import { loadQuestionnaireSuccess, loadQuestionnaireFailure } from './actions';

export function* getQuestionnairelist() {
  try {
    // Call our request helper (see 'utils/request')
    // const repos = yield call(request, requestURL);
    const questionaireList = JSON.parse(localStorage.getItem('Questionlist'));
    yield put(loadQuestionnaireSuccess(questionaireList));
  } catch (err) {
    yield put(loadQuestionnaireFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_QUESTIONNAIRE, getQuestionnairelist);
}
