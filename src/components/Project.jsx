// Desc: This file contains the Project component
const Project = ({ page, name, stack }) => {
  return (
    <div className="demoContainer">
      <div className="demoImage">
        <img src={page} alt="" className="demoImage" />
      </div>
      <div className="demoInfo">
        <h3>{name}</h3>
        <ul>
          {stack.map((element, index) => (
            <li key={index}>
              <img src={element.logo} alt="" />
              {element.name}
            </li>
          ))}
        </ul>
        <a href="">Demo</a>
        <a href="">Code</a>
      </div>
    </div>
  );
};

export default Project;
