import React from 'react';
import PropTypes from 'prop-types';

import ModalShow from 'components/ModalShow';
import { push } from 'connected-react-router';

// import Button from 'components/Button';
// import LoadingIndicator from 'components/LoadingIndicator';
// import RepoListItem from 'containers/RepoListItem';

export class CreateEditQuestionaire extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      noOfField: 1,
      name: '',
      cnt: 1,
      question: '',
      // document: [],
      error: '',
      textDisabled: true,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({
      show: false,
      question: '',
      anwer_1: '',
      anwer_2: '',
      anwer_3: '',
    });
    push('/');
    this.props.action();
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  removeItem = (e, id) => {
    document.getElementById(id).remove();
  };

  addAnswerItem = countItem => {
    // let documents: any;

    // const documents = this.state.documents.concat(DocumentInput);
    this.setState({ countItem });
  };

  handleSubmit = e => {
    // const qText = '';
    let qList = [];
    // let ll: any;
    // let update: any;
    const questionnaireData = [];
    e.preventDefault();
    console.log(this.state);
    if (this.state.question === '' || this.state.anwer_1 === '') {
      this.setState({ error: ' Field should not be Empty' });
      return false;
    }
    qList = JSON.parse(localStorage.getItem('Questionlist'));
    if (qList === null && !qList) {
      localStorage.setItem('Questionlist', JSON.stringify(this.state));
      this.hideModal();
    } else {
      if (Array.isArray(qList)) {
        qList.push(this.state);
        localStorage.setItem('Questionlist', JSON.stringify(qList));
      } else {
        questionnaireData.push(qList);
        questionnaireData.push(this.state);
        localStorage.setItem('Questionlist', JSON.stringify(questionnaireData));
      }
      this.hideModal();
      // questionnaireData.push(this.state);
      // localStorage.setItem('Questionlist', JSON.stringify(qList));    
    }
  };

  enableId(id) {
    console.log(id);
    // this.state = {
    //   textDisabled: !this.state.textDisabled
    // };
    document.getElementById(id).removeAttribute('disabled');
  }

  render() {
    return (
      <div>
        <ModalShow
          show={this.state.show}
          handleClose={this.hideModal}
          handleChange={this.handleChange}
          removeItem={this.removeItem}
          // addAnswerItem={this.addAnswerItem}
          cnt={this.state.cnt}
          handleSubmit={this.handleSubmit}
          // inputComponent={this.state.documents}
          showError={this.state.error}
          enableId={this.enableId}
          textDisabled={this.state.textDisabled}
        />
        <div className="row mainbtn">
          <button
            type="button"
            onClick={this.showModal}
            className="btn btnmain"
          >Add Question</button>
        </div>
      </div>
    );
  }
}

CreateEditQuestionaire.propTypes = {
  // loading: PropTypes.bool,
  action: PropTypes.any,
  // repos: PropTypes.any,
};

export default CreateEditQuestionaire;
