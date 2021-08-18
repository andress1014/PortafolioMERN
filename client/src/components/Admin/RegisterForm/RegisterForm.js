import React, { useState } from "react";
import { Form, Icon, Input, Button, Checkbox, notification } from "antd";
import "./RegisterForm.scss";

export default function RegisterForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false
  })

  const changeForm = e => {
      if(e.target.name === "privacyPolicy") {
          setInputs({
            ...inputs,
            [e.target.name]: e.target.checked
          })
      } else {
          setInputs({
              ...inputs,
              [e.target.name]: e.target.value
          })
      }
  };

  const inputVallidation =  e => {
    console.log('Validando')
  }

  const register = e => {
    e.preventDefault();
    console.log(inputs)
  }

  return (
    <Form className="register-form" onSubmit={register} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Email"
          className="register-form__input"
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Password"
          className="register-form__input"
          value={inputs.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder=" Repeat Password"
          className="register-form__input"
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
          I accept the privacy policy of the page
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Create Account
        </Button>
      </Form.Item>
    </Form>
  );
}
