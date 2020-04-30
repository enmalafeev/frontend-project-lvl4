import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { asyncActions } from '../slices';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels.channels,
    currentChannel: state.currentChannel.id,
  };
  return props;
};

const actionCreators = {
  addMessage: asyncActions.addMessage,
};

const InputMessage = ({ currentChannel, addMessage }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [currentChannel]);

  const formik = useFormik({
    initialValues: {
      userMessage: '',
    },
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const newMessage = { data: { attributes: values } };
      addMessage(newMessage, currentChannel);
      setSubmitting(false);
      resetForm();
    },
  });
  return (
    <div className="mt-auto">
      <form onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <input
            required
            ref={inputRef}
            className="col form-control"
            id="userMessage"
            name="userMessage"
            type="text"
            placeholder="Type your message here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userMessage}
          />
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(InputMessage);
