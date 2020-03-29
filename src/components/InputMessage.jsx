import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    currentChannel: state.currentChannel,
    channels: state.channels,
  };
  return props;
};

const actionCreators = {
  addMessage: actions.addMessage,
};

const InputMessage = ({ currentChannel, addMessage }) => {
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
            className="col form-control"
            id="userMessage"
            name="userMessage"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userMessage}
            required
          />
          <button
            className="col-2 btn btn-primary"
            type="submit"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(InputMessage);
