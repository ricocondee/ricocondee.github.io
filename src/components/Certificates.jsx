import React from "react";
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

export default Certificates;
