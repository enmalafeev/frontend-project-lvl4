import React from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import * as actions from '../actions';

// const mapDispatchToProps = (dispatch) => ({
//   sendMessage: () => dispatch(actions.addMessage()),
//   dispatch,
// });

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
  };
  return props;
};

const actionCreators = {
  addMessage: actions.addMessage,
};

const InputMessage = ({ dispatch, addMessage }) => {
  const formik = useFormik({
    initialValues: {
      userMessage: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      const newMessage = { data: { attributes: values.userMessage } };
      dispatch(addMessage(newMessage, 'general'));
      setSubmitting(false);
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

export default connect(mapStateToProps, actionCreators)(InputMessage);
