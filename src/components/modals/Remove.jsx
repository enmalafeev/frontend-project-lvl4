import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Remove = (props) => {
  const { modalProps: { removeChannel, modalData }, onHide } = props;
  const handleRemove = (id) => (e) => {
    e.preventDefault();
    removeChannel(id);
    onHide();
  };
  return (
    <Modal
      show
      onHide={onHide}
    >
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete this channel and all its messages?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>Cancel</Button>
        <Button variant="danger" onClick={handleRemove(modalData.item.id)}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Remove;
