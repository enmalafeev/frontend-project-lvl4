import React, { useRef } from 'react';
import { useFormik } from 'formik';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';

const AddChannelModal = (props) => {
  const { onHide } = props;
  const inputEl = useRef(null);
  const formik = useFormik({
    initialValues: {
      channelName: '',
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      resetForm();
    },
  });
  return (
    <Modal
      show
      onHide={onHide}
      onEntered={() => inputEl.current.focus()}
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
              name="channelName"
              ref={inputEl}
              onChange={formik.handleChange}
              value={formik.values.channelName}
            />
          </FormGroup>
          <FormControl type="submit" className="btn btn-primary" value="submit" />
        </form>
      </Modal.Body>

    </Modal>
  );
};

export default AddChannelModal;
