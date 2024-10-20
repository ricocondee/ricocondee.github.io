import React from "react";
import PropTypes from 'prop-types';
import { getImageUrl } from "../utils/imageUtil";

const Certificates = ({data}) => {
  return (
    <div className="courses-container">
      {data?.map((certificate, index) => {
         
        return (
          <div key={index} className="course">
            <img src={getImageUrl(certificate.logo)} alt={certificate.title} />
            <div className="course-info">
              <h3>{certificate.title}</h3>
              <p>{certificate.credential}</p>
              <span>{certificate.company}</span>
              <p className="capitalize">{certificate.date}</p>
              <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">Show Credential</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
Certificates.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      credential: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      credentialUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Certificates;