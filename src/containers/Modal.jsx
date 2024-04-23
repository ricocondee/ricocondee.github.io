import React from 'react'
import {BsXLg} from 'react-icons/bs';

const Modal = ({func}) => {
  return (
    <div className='modal'>
      <BsXLg onClick={func} className='closeModal'/>
      <iframe src="https://github.com/ricocondee/ricocondee.github.io/blob/main/src/assets/ricocondee_resume.pdf"></iframe>
    </div>
  )
}

export default Modal