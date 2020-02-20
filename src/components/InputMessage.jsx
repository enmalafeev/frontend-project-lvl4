import React from 'react';
import { useFormik } from 'formik';

const InputMessage = () => {
  const formik = useFormik({
    initialValues: {
      userMessage: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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

export default InputMessage;
