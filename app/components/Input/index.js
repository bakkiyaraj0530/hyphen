import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  return (
    <div id={props.itemKey}>
      <input
        className="form-control"
        id={props.id}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        disabled={props.textDisabled}
      />
      {props.showError ? (
        <span className="has_error">{props.showError}</span>
      ) : ''}
      {/* {props.showDelete && <span className=""><i
        className="fa fa-times"
        onClick={e => props.removeItem(e, props.itemKey)}
      /></span>} */}
      {props.showDelete && <span> <a href="javascript: void(0)" onClick={() => props.enableField(props.id)} >Edit</a></span>}
      {props.showDelete && <span className="removeitem"> <a href="javascript: void(0)" onClick={(e) => props.removeItem(e, props.itemKey)} >Remove</a></span> }
      {/* {(cnt == 1 || cnt == 2) && <span className='has_error'>{answer}</span>} */}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  inputType: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.func,
  removeItem: PropTypes.func,
  showError: PropTypes.string,
  showDelete: PropTypes.bool,
  enableField: PropTypes.func,
  itemKey: PropTypes.string,
  textDisabled: PropTypes.bool,
  id: PropTypes.string,
};
export default Input;
