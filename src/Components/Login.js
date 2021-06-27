import React from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import makeToast from "../Toaster";
import { useHistory } from "react-router-dom";

const Login = ({ user }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let history = useHistory();

  const handleChange = (e, { name, value }) => {
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    axios
      .post(`/${user}/auth`, { email, password })
      .then((res) => {
        makeToast("success", res.data.message);

        history.push(`/${user}Dashboard/candidateHome/${res.data._id}`);
      })
      .catch((err) => {
        console.log("login.js login error", err);
        makeToast("error", err?.response?.data?.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Form.Input
          required
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          icon="at"
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          required
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          icon="asterisk"
          type="password"
        />
        <Form.Button content="Login" inverted fluid color="violet" />
      </Form.Field>
    </Form>
  );
};

export default Login;
