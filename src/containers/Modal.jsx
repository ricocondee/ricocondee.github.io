import React from 'react'
import propTypes from 'prop-types';
import {BsXLg} from 'react-icons/bs';

const Modal = ({func}) => {
  return (
    <div className='modal'>
      <BsXLg onClick={func} className='closeModal'/>
      <iframe src="https://drive.google.com/file/d/1RuBeVVmL61jRO7ueEG4ayKIU4BqgZdiC/preview" ></iframe>
    </div>
  )
}

Modal.propTypes = {
  func: propTypes.func,
};

export default Modal