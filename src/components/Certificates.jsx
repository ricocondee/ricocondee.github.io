import React from "react";
import PropTypes from "prop-types";

const Certificates = ({data}) => {
  return (
    <div className="courses-container">
      {data?.map((certificate, index) => {
        return (
          <div key={index} className="course">
            <img src={certificate.logo} alt={certificate.title} />
            <div className="course-info">
              <h3>{certificate.title}</h3>
              <span>{certificate.company}</span>
              <p className="capitalize">{certificate.date}</p>
              <p>{certificate.credential}</p>
              <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">Show Credential</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Certificates.propTypes = {data: PropTypes.array.isRequired}

export default Certificates;
