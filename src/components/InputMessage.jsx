import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import cn from 'classnames';
import { asyncActions } from '../slices';

const mapStateToProps = (state) => {
  const props = {
    channels: state.channels.channels,
    currentChannel: state.currentChannel.id,
    error: state.errors.error,
    isError: state.errors.isError,
    disabled: state.messages.processing,
  };
  return props;
};

const actionCreators = {
  addMessage: asyncActions.addMessage,
};

const InputMessage = ({
  currentChannel, addMessage, isError, error, disabled,
}) => {
  const inputClass = (err) => cn({
    'form-control': true,
    col: true,
    'is-invalid': err,
  });

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
            disabled={disabled}
            ref={inputRef}
            className={inputClass(isError)}
            id="userMessage"
            name="userMessage"
            type="text"
            placeholder="Type your message here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userMessage}
          />
        </div>
        {isError && <div className="text-danger">{error}</div>}
      </form>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(InputMessage);
