import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../actions';

const actionCreators = {
  addMessage: actions.addMessage,
};

const InputMessage = (props) => {
  // console.log(props);
  window.addMessage = props.addMessage;
  const formik = useFormik({
    initialValues: {
      userMessage: '',
    },
    onSubmit(values, { props, setSubmitting }) {
      // props.addMessage(values);
      console.log(props);
      setSubmitting(false);
      // alert(JSON.stringify(values, null, 2));
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

export default connect(null, actionCreators)(InputMessage);
