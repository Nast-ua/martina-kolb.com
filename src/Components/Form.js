
import React from "react";
import PropTypes from 'prop-types';

function Form({text, onChangeText}) {
    return (
        <textarea placeholder='Please type something in.' value={text} onChange={onChangeText} className="my-4 h-32 w-64 rounded" />
    );
}

Form.propTypes = {
    text: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
  }

export default Form;