import React from 'react';
import PropTypes from 'prop-types';

// import Ul from './Ul';
import Input from 'components/Input';

function ModalShow({
  handleClose,
  show,
  noOfField = 3,
  handleChange,
  removeItem,
  enableId,
  // addAnswerItem,
  cnt,
  handleSubmit,
  // inputComponent,
  showError,
  textDisabled,
}) {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const children = [];

  if (noOfField) {
    for (let i = 0; i < noOfField; i++) {
      const itemKey = `itemId_${cnt}`;
      const id = `answers_${cnt}`;

      const formElementId = `textformElement_${cnt}`;
      children.push(
        <div id={formElementId}>
          <Input
            type="text"
            title={`Answer_${cnt}`}
            name={`answer_${cnt}`}
            handleChange={e => handleChange(e)}
            className="form-control"
            placeholder={`Answer ${cnt}`}
            removeItem={e => removeItem(e, itemKey)}
            enableField={e => enableId(e, itemKey)}
            itemKey={itemKey}
            showError={cnt <= 2 ? showError : ''}
            formeId={formElementId}
            id={id}
            showDelete
            // isDisabled
            // textDisabled={textDisabled}
          />
        </div>
      );
      cnt += 1;
    }
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h3>Add a custom question</h3>
        <button onClick={handleClose} className="btn btn-position">
          <i className="fa fa-times" />
        </button>
        <form className="form-group" onSubmit={handleSubmit}>
          <div className="modal-container">
            <div className="row">
              <div className="form-group" >
                <label htmlFor="Q" className="form-label">Questions</label>
                <Input
                  type="text"
                  title="Question"
                  name="question"
                  handleChange={e => handleChange(e)}
                  placeholder="Question"
                  showError={showError}
                  itemKey="questionElement"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group" >
                <label htmlFor="Q" className="form-label">Answers</label>
                {children}
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary"
            //onClick={addAnswerItem(cnt)}
            >Add Answers</button>
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
}

ModalShow.propTypes = {
  handleClose: PropTypes.any,
  show: PropTypes.any,
  noOfField: PropTypes.any,
  handleChange: PropTypes.any,
  removeItem: PropTypes.any,
  // addAnswerItem: PropTypes.any,
  cnt: PropTypes.any,
  handleSubmit: PropTypes.any,
  // inputComponent,
  showError: PropTypes.any,
  enableId: PropTypes.func,
  textDisabled: PropTypes.bool,
};

export default ModalShow;
