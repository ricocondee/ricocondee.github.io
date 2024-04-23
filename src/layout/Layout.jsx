import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../containers/Modal";
import { useState } from "react";

const Layout = ({ children }) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="Layout">
      <Header funcBtn={handleModal}/>
      {children}
      <Footer />
      {modal && <Modal func={handleModal} />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
