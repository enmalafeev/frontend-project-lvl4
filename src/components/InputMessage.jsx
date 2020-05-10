import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { asyncActions } from '../slices';

const InputMessage = () => {
  const inputClass = (err) => cn({
    'form-control': true,
    col: true,
    'is-invalid': err,
  });
  const currentChannel = useSelector((state) => state.currentChannel.id);
  const error = useSelector((state) => state.errors.error);
  const isError = useSelector((state) => state.errors.isError);
  const { addMessage } = asyncActions;

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [currentChannel]);

  const formik = useFormik({
    initialValues: {
      userMessage: '',
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const newMessage = { data: { attributes: values } };
      await dispatch(addMessage(newMessage, currentChannel));
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
            disabled={formik.isSumbitting}
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

export default InputMessage;
