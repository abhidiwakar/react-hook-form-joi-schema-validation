import { Button, Card, Form, InputGroup } from "react-bootstrap";
import "./App.css";

export default function App() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="p-2">
        <h4 className="text-center">React hook form + Joi schema validation</h4>
        <Card className="mt-4">
          <Card.Body>
            <Form noValidate>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Control.Feedback type="invalid">
                    Please enter email
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Control.Feedback type="invalid">
                    Please enter password
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <InputGroup hasValidation>
                  <Form.Check type="checkbox" label="Remember me" />
                </InputGroup>
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
