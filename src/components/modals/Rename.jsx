import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const Rename = (props) => {
  const { modalProps: { renameChannel, modalData }, onHide } = props;

  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.select();
  }, [null]);

  const formik = useFormik({
    initialValues: {
      name: modalData.item.name,
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const newName = { data: { attributes: values } };
      renameChannel(modalData.item.id, newName);
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
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl
              name="name"
              required
              ref={inputEl}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </FormGroup>
          <FormControl type="submit" className="btn btn-primary" value="submit" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Rename;
