import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => dispatch(actions.addMessage()),
  dispatch,
});

const InputMessage = ({ sendMessage }) => {
  const formik = useFormik({
    initialValues: {
      userMessage: '',
    },
    onSubmit: (values) => {
      sendMessage(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group row">
        <input
          className="col-10 form-control"
          id="userMessage"
          name="userMessage"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userMessage}
        />
        <button
          className="col-2 btn btn-primary"
          type="submit"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default connect(null, mapDispatchToProps)(InputMessage);
