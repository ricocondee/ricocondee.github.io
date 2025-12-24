import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../containers/Modal";
import PropTypes from 'prop-types';
import { ModalProvider, useModal } from "../context/ModalContext"; // Import ModalProvider and useModal

const Layout = ({ children }) => {
  return (
    <ModalProvider> {/* Wrap the layout with ModalProvider */}
      <LayoutContent>
        {children}
      </LayoutContent>
    </ModalProvider>
  );
};

// New component to consume the context
const LayoutContent = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal(); // Use useModal hook

  return (
    <div className="Layout">
      <Header /> {/* Header will now consume context directly */}
      {children}
      <Footer />
      {modal && <Modal func={() => handleModal()} content={modalContent} />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

LayoutContent.propTypes = {
  children: PropTypes.node,
};

export default Layout;
