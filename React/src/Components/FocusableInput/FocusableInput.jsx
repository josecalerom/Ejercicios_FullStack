import { useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// This import affects all the page

export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <InputGroup className="focusableInput mb-3" size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">@</InputGroup.Text>
        <Form.Control placeholder="Email" type="text" ref={inputRef} />
        <Form.Control placeholder="Full name" aria-label="Full name" />
        <Button variant="primary">
          Send
        </Button>
      </InputGroup>
    </>
  );
}
