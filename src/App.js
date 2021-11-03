import { useState } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import './App.css';
import styles from './style.module.scss'
import LayoutViewer from './components/LayoutViewer';
import documentConfig from "./documentConfig";

export default function App() {
  const [showModal, setShowModal] =  useState(false)
  const [readMode, setReadMode] = useState(true);

  const handleChangeModeClick = () => {
    if (readMode) {
      return setReadMode(false);
    }
    setShowModal(true);
  }

  const handleModalAction = () => {
    setReadMode(!readMode)
    setShowModal(false);
  }

  return (
    <div className="App">
      <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)}>
        <ModalBody className={styles.ModeToggler}>
          <span>Switching from edit to read mode will copy the json structure to clipboard</span>
          <button onClick={handleModalAction}>Copy!</button>
        </ModalBody>
      </Modal>
      <div className={styles.ModeToggler}>
        <span>{`current mode: ${readMode ? 'read' : 'edit'}`}</span>
        <button onClick={handleChangeModeClick}>Switch mode</button>
      </div>
      <LayoutViewer attributes={documentConfig} readMode={readMode} />
    </div>
  );
}
