import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { actions } from '../slices';

const ErrorBox = () => {
  const error = useSelector((state) => state.errors.error);
  const isError = useSelector((state) => state.errors.isError);

  const dispatch = useDispatch();

  const closeError = () => {
    dispatch(actions.clearErrors());
  };
  return (
    <div className="row justify-content-center">
      <div className="col">
        <Alert
          variant="danger"
          show={isError}
          onClose={closeError}
          dismissible
        >
          {error}
        </Alert>
      </div>
    </div>
  );
};

export default ErrorBox;
