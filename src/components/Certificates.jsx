import React from "react";

const Certificates = ({logo, title, company, date, credential, credentialUrl, showCredential}) => {
  return (
    <ul>
      <li>
        <div className="edu__content">
          <img src={logo} alt="" className="certLogo"/>
          <div className="edu__text">
            <strong>{title}</strong>
            <span>{company}</span>
            <span>{date}</span>
            <span>{credential}</span>
            <a href={credentialUrl} target="_blank" rel="noreferrer">
              {showCredential} <i className="gg-link"></i>
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Certificates;
