import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorBox = (props) => {
  const { closeErrorFunction, errorStore } = props;
  const { error, isError } = errorStore;
  return (
    <div className="row justify-content-center">
      <div className="col-6">
        <Alert variant="danger" show={isError} onClose={closeErrorFunction} dismissible>
          {error}
        </Alert>
      </div>
    </div>
  );
};

export default ErrorBox;
