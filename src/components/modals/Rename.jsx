import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const Rename = (props) => {
  const { modalProps: { renameChannel, modalData }, onHide } = props;
  const handleRename = (id) => (e) => {
    e.preventDefault();
    renameChannel(id);
    onHide();
  };
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.select();
  }, [null]);

  const formik = useFormik({
    initialValues: {
      body: modalData.item.name,
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      renameChannel(modalData.id, values.body);
      setSubmitting(false);
      resetForm();
      onHide();
    },
  });
  return (
    <Modal
      show
      onHide={onHide}
    >
      <Modal.Header closeButton onHide={onHide}>
        <Modal.Title>Rename channel</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleRename}>
          <FormGroup>
            <FormControl
              name="body"
              data-testid="input-body"
              required
              ref={inputEl}
              onChange={formik.handleChange}
              value={formik.values.body}
            />
          </FormGroup>
          <FormControl type="submit" className="btn btn-primary" value="submit" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
