import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const Add = (props) => {
  const { modalProps: { addChannel }, onHide } = props;
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.select();
  }, [null]);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const newChannel = { data: { attributes: values } };
      addChannel(newChannel);
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
      <Modal.Header closeButton>
        <Modal.Title>Add new channel</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl
              required
              type="text"
              name="name"
              ref={inputRef}
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

export default Add;
