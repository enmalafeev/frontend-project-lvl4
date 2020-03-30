import React, { useRef } from 'react';

export default (props) => {
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
      show={props.show}
      onHide={props.onHide}
      onEntered={() => inputEl.current.focus()}>
      <Modal.Header closeButton>
        <Modal.Title>Add new channel</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl type="text" name="channelName" required ref={inputEl} onChange={formik.handleChange}
            value={formik.values.channelName}/>
          </FormGroup>
          <FormControl type="submit" className="btn btn-primary" value="submit" />
        </form>
      </Modal.Body>

  </Modal>
  )
}