import { Formik, Form, Field } from "formik";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/operations";

export default function RegisterPage() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  function doSubmit(values, action) {
    dispatch(registration(values));
    action.resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={doSubmit}
    >
      <Form className="formLoginReg">
        <h2>Registration form</h2>
        <label htmlFor={nameId}>Name</label>
        <Field id={nameId} name="name"></Field>
        <label htmlFor={emailId}>E-mail</label>
        <Field id={emailId} name="email"></Field>
        <label htmlFor={passwordId}>Password</label>
        <Field id={passwordId} name="password" type="password"></Field>
        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
}
