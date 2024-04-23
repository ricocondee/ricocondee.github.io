import React from 'react'
import propTypes from 'prop-types';
import {BsXLg} from 'react-icons/bs';

const Modal = ({func}) => {
  return (
    <div className='modal'>
      <BsXLg onClick={func} className='closeModal'/>
      <iframe src="src\assets\ricocondee_resume.pdf"></iframe>
    </div>
  )
}

Modal.propTypes = {
  func: propTypes.func,
};

export default Modal