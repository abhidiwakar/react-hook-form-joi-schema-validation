import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import "./App.css";

const schema = Joi.object({
  email: Joi.string()
    .trim()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  remember: Joi.boolean().required(),
}).required();

type Inputs = {
  email: string;
  password: string;
  remember: boolean;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: joiResolver(schema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="p-2">
        <h4 className="text-center">React hook form + Joi schema validation</h4>
        <Card className="mt-4">
          <Card.Body>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    isInvalid={typeof errors.email !== "undefined"}
                    {...register("email")}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    isInvalid={typeof errors.password !== "undefined"}
                    {...register("password")}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <InputGroup hasValidation>
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    isInvalid={typeof errors.remember !== "undefined"}
                    {...register("remember")}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.remember?.message}
                  </Form.Control.Feedback>
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
