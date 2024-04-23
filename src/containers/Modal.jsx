import React from 'react'
import {BsXLg} from 'react-icons/bs';

const Modal = ({func}) => {
  return (
    <div className='modal'>
      <BsXLg onClick={func} className='closeModal'/>
      <iframe src="src\assets\ricocondee_resume.pdf"></iframe>
    </div>
  )
}

export default Modal