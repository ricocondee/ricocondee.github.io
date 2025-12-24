import React from 'react'
import PropTypes from 'prop-types';
import {BsXLg} from 'react-icons/bs';
import styles from '../styles/Modal.module.css';

const Modal = ({func, content}) => {
  return (
    <div className={styles.modalOverlay} onClick={func}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <BsXLg onClick={func} className={styles.closeModal}/>
        {content === 'resume' && (
          <iframe 
            src="https://drive.google.com/file/d/1xK3ZN4AMjrpnZINYtWSJ6OJ9QL9x0zNA/preview" 
            allow="autoplay"
            className={styles.iframe}
            title="Resume"
          ></iframe>
        )}
        {content === 'contact' && (
          <div className={styles.contactContainer}>
             <h2>Contact Me</h2>
             <p>Feel free to reach out to me via email at:</p>
             <a href="mailto:emanuel@ricocondee.dev" className={styles.emailLink}>emanuel@ricocondee.dev</a>
             {/* Add more contact info or a form here later */}
          </div>
        )}
      </div>
    </div>
  )
}

Modal.propTypes = {
  func: PropTypes.func,
  content: PropTypes.string,
};

export default Modal