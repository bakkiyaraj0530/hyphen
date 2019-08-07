/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  // makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import CreateEditQuestionaire from '../../components/CreateEditQuestionaire';

// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// // import Input from './Input';
// import Section from './Section';
// import messages from './messages';
import { loadQuestionnaire } from './actions';
import {
  makeSelectQuestionList,
  // makeSelectloading,
  // makeSelecterror,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'question';

export function Questionnaire({ questionslist, questionaireList, loading }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // questionslist
  const answerArray = [];
  let items = '';
  if (questionslist != null) {
    if (Array.isArray(questionslist) && questionslist !== '') {
      questionslist.forEach((item, qKey) => {
        const inn = {
          id: qKey,
          question: item.question,
        };
        answerArray.push(inn);
      });
    } else {
      const inn = {
        id: 1,
        question: questionslist.question,
      };
      answerArray.push(inn);
    }
    items =
      answerArray &&
      answerArray.map(item => (
        <div className="questionaire-list col-12">
          <div>{item.question}</div>
          <div>
            <h6>Custom: {item.id}</h6>
          </div>
        </div>
      ));
  }
  const [messageShown, messageShownUpdate] = useState(false);

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    // if (username && username.trim().length > 0) onSubmitForm();
    questionaireList();
  }, []);

  const handler = () => {
    // messageShown = !messageShown;
    // alert(messageShowns);
    messageShownUpdate(!messageShown);
  };

  return (
    <div className="row questionaire col-12">
      <div className="left-head col-6">
        <strong>Question</strong>
      </div>
      <div className="right-head col-6">
        <strong>
          Question Settings&nbsp;
          <i className='fa fa-exclamation-circle' />
        </strong>
      </div>
      <div className='divider' />
      {items && items.length === 0 ? (
        <div className="no-data col-12">
          <i className="fa fa-folder" />
          No Data
        </div>
      ) : (
          <div className="col-12">{items}</div>
        )}
      <div className="col-12 space-container">
        <CreateEditQuestionaire messageShown action={handler} />
      </div>
    </div>
  );
}

Questionnaire.propTypes = {
  loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  questionslist: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  questionaireList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  questionslist: makeSelectQuestionList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    questionaireList: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadQuestionnaire());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Questionnaire);
