import React from 'react'
import PropTypes from 'prop-types';
import {BsXLg} from 'react-icons/bs';
import styles from '../styles/Modal.module.css';

const Modal = ({func}) => {
  return (
    <div className={styles.modalOverlay} onClick={func}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <BsXLg onClick={func} className={styles.closeModal}/>
        <iframe 
          src="https://drive.google.com/file/d/1xK3ZN4AMjrpnZINYtWSJ6OJ9QL9x0zNA/preview" 
          allow="autoplay"
          className={styles.iframe}
          title="Resume"
        ></iframe>
      </div>
    </div>
  )
}

Modal.propTypes = {
  func: PropTypes.func,
};

export default Modal