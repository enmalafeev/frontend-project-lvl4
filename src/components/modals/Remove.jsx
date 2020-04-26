import React from 'react';
import { Modal, FormGroup } from 'react-bootstrap';

const Remove = (props) => {
  const { modalProps: { removeChannel }, onHide } = props;
  const handleRemove = (id) => (e) => {
    e.preventDefault();
    removeChannel(id);
    onHide();
  };
  return (
    <Modal>
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleRemove()}>
          <FormGroup>
            <input type="submit" className="btn btn-danger" value="remove" />
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Remove;
