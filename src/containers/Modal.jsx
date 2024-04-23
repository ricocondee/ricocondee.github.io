import React from 'react'
import {BsXLg} from 'react-icons/bs';

const Modal = ({func}) => {
  return (
    <div className='modal'>
      <BsXLg onClick={func} className='closeModal'/>
      <iframe src="https://viewscreen.githubusercontent.com/view/pdf?browser=chrome&bypass_fastly=true&color_mode=auto&commit=621246273c0494cf3aaebc9d9e20ef91621d5bab&device=unknown_device&docs_host=https%3A%2F%2Fdocs.github.com&enc_url=68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f7269636f636f6e6465652f7269636f636f6e6465652e6769746875622e696f2f363231323436323733633034393463663361616562633964396532306566393136323164356261622f7372632f6173736574732f7269636f636f6e6465655f726573756d652e706466&logged_in=true&nwo=ricocondee%2Fricocondee.github.io&path=src%2Fassets%2Fricocondee_resume.pdf&platform=windows&repository_id=652040062&repository_type=Repository&version=124#2f26376e-35ba-4f21-8e30-32611a7ffd75"></iframe>
    </div>
  )
}

export default Modal