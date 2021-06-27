import React from "react";
import { Form } from "semantic-ui-react";
import axios from "axios";
import makeToast from "../Toaster";

const Signup = ({ user, history }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [company, setCompany] = React.useState("");

  const handleChange = (e, { name, value }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "company":
        setCompany(value);
        break;
      default:
        console.log("Error in selection");
    }
  };
  const handleSubmit = () => {
    let data = {};
    if (user === "candidate") {
      data = { name, email, password };
    } else {
      data = { name, email, password, company };
    }
    axios
      .post(`/${user}/register`, data)
      .then((res) => {
        makeToast("success", res.data.message);
      })
      .catch((err) => {
        makeToast("error", err?.response?.data?.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Form.Input
          required
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
          icon="user"
        />
      </Form.Field>
      <Form.Field>
        <Form.Input
          required
          icon="at"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
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
        {user === "recruiter" ? (
          <Form.Field>
            <Form.Input
              required
              placeholder="Company Name"
              name="company"
              value={company}
              onChange={handleChange}
              icon="building"
            />
          </Form.Field>
        ) : null}

        <Form.Button content="Sign Up" inverted fluid color="violet" />
      </Form.Field>
    </Form>
  );
};

export default Signup;
