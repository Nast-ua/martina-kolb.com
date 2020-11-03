
import React from "react";
import LoadingIndicator from './LoadingIndicator';
import PropTypes from 'prop-types';

function Button({contentType, label, onPress}) {
  const buttonStyle = contentType==='disabled' ? 'opacity-50 cursor-not-allowed' : ''
  return (
      <button 
        disabled={contentType==='disabled'} 
        className={`min-h-4 my-4 overflow-hidden items-center bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-2 rounded ${buttonStyle}`} 
        onClick={onPress}
      >
        <Content type={contentType} label={label} />
      </button>
  );
}

function Content({type='default', label}) {
  return (
    <div className='flex flex-row justify-center items-center'>
      {type==="inProgress" && <LoadingIndicator />}
      <h1>{label}</h1>
    </div>
  )
}

Content.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

Button.propTypes = {
  contentType: PropTypes.oneOf(['default', 'disabled', 'inProgress']),
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default Button;