import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal(props) {
  const {category, header, text} = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`Key Features: ${category}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{header}</h4>
        <br />
        <p>
          {text}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;



