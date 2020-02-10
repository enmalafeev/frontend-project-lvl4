import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const InputMessage = () => (
  <Form>
    <div className="row">
      <Form.Control className="col-10" type="text" placeholder="Type here..." />
      <Button className="col-2" variant="primary" type="submit">
        Отправить
      </Button>
    </div>
  </Form>
);

export default InputMessage;
