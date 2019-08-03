import * as React from "react";
import "../css/site.css";

interface IState {
  // documents: any;
}
// export class DocumentInput extends React.Component({}, IState) {
//   state = {
//     index: '',
//     props: ''
//   }
//   render() {
//     return <input 
//       type="file" 
//       name={ `document-${ this.props.index }-document` } 
//     />;
//   }
// }
export class CreateEditQuestionaire extends React.Component<{}, IState> {
  state = {
    show: false,
    noOfField: 1,
    name: '',
    cnt: 1,
    question: '',
    answer_1: '',
    answer_2: '',
    answererror: '',
    // document: [],
    error: '',
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // handleInput = (e) => {
  //   console.log(e.target.value);
  //   updateName_`${id}`(e.target.value);
  // }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: any) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  removeItem = (e: React.ChangeEvent<HTMLInputElement>, id: any) => {
    document.getElementById(id).remove();
  }
  addAnswerItem = (countItem) => {

    // let documents: any;

    // const documents = this.state.documents.concat(DocumentInput);
    // this.setState({ documents });

    // const div = document.createElement('div');
    // // console.log('ddddd', countItem);
    // div.id = `item_${countItem}`;
    // div.innerHTML = `<input type="text" title="Full name" name={Answer_${countItem}} 
    //        onChange={(e) => handleChange(e)}
    //         className="form-control" placeholder="Answers"/>
    //       <i className="fa fa-times" onClick={(e) => removeItem(e, item_${countItem})}/>`;
    // div.innerHTML = `
    //   <input type="text" name="name" value="" />
    //   <input type="text" name="value" value="" />
    //   <label> 
    //     <input type="checkbox" name="check" value="1" /> Checked? 
    //   </label>
    //   <input type="button" value="-" onclick="removeRow(this)" />
    // `;
    // document.getElementById('form-group').appendChild('<div>test</div>');
    // console.log(document.getElementsByClassName('form-group'));
  }
  handleSubmit = (e: any) => {
    let qList: any = [];
    let ll: any;
    let update: any;
    let questionnaireData: any = [];
    e.preventDefault();
    if(this.state.question === '') {
      this.setState({ error: ' Question field should not be Empty'});
      return false;
    }
    if(this.state.answer_1 === '') {
      this.setState({ answererror: ' Please fill provide at least 2 answers'});
      return false;
    }
    if(this.state.answer_2 === '') {
      this.setState({ answererror: ' Please fill provide at least 2 answers'});
      return false;
    }
    qList = JSON.parse(localStorage.getItem('Questionlist'));
    if (qList === null && !qList) {
      localStorage.setItem('Questionlist', JSON.stringify(this.state));
      window.location.href = '/';
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
      window.location.href = '/';
      this.hideModal();  
    }
  }

  enableField = (id) => {
    document.getElementById(id).removeAttribute('disabled');
  }
  clearMessage = () => {
    this.setState({
      answererror: '',
      error:''
    });
  }
  render() {
    return (
      <div>
        <ModalShow show={this.state.show} handleClose={this.hideModal} handleChange={this.handleChange} removeItem={this.removeItem} addAnswerItem={this.addAnswerItem} cnt={this.state.cnt} handleSubmit={this.handleSubmit} showError={this.state.error} enableField={this.enableField} answer={this.state.answererror} clearMessage={this.clearMessage} />
        <button
          type="button"
          onClick={this.showModal}
          className="btn btn-primary"
        >
          Add Question
        </button>
      </div>
    );
  }
}

const ModalShow = ({ handleClose, show, noOfField = 3, handleChange, removeItem, addAnswerItem, cnt, handleSubmit, showError, enableField, answer, clearMessage }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  let children = [];

  if (noOfField) {
    for (let i = 0; i < noOfField; i++) {
      const itemKey = `itemId_${cnt}`;
      const id = `answer_id_${cnt}`;
      children.push(
        <div id={itemKey}>
          <input type="text" title="Full name" name={`answer_${cnt}`}
            onChange={(e) => handleChange(e)}
            className="form-control" placeholder="Answers"  id={id} disabled onBlur={clearMessage}/>
           <span> <a href="javascript: void(0)" onClick={() => enableField(id)} >Edit</a></span>
           <span> <a href="javascript: void(0)" onClick={(e) => removeItem(e, itemKey)} >Remove</a></span>
            {(cnt == 1 || cnt == 2) && <span className='has_error'>{answer}</span> }
           {/* <i className="fa fa-question-circle"  />
          <i className="fa fa-times" onClick={(e) => removeItem(e, itemKey)} /> */}
        </div>
      );
      cnt += 1;
    }
  }

  // const documents = inputComponent.map((Element, index) => {
  //   return <Element key={ index } index={ index } />
  // });

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h3>Add a custom question</h3>
        <button onClick={handleClose} className="btn btn-position">
          <i className="fa fa-times" />
        </button>
        <form className="form-group" onSubmit={handleSubmit} >
          <div className="modal-container">
            <div className="row">
              <div className="form-group">
                <label>Question</label>
                <div><input type="text" name="question" className="form-control" placeholder="Questions" onChange={(e) => handleChange(e)} />
                <span className='has_error'>{showError}</span> </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group" id="formElement">
                <label>Answers</label>
                {children}
                {/* {documents} */}
                {/* <input type="text" className="form-control" placeholder="Answers"/>
                <input type="text" className="form-control" placeholder="Answers"/>
                <input type="text" className="form-control" placeholder="Answers"/> */}
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={addAnswerItem(cnt)}
            >
              Add Answers
        </button>
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-save"
            />
          </div>
        </form>
      </section>
    </div>
  );
};
