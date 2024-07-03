import { Formik, Form, Field } from "formik";
import { useId } from "react";

import { useDispatch } from "react-redux";
import { logging } from "../../redux/auth/operations";

export default function LoginPage() {
  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  function doSubmit(values, action) {
    dispatch(logging(values));
    action.resetForm();
  }

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={doSubmit}>
      <Form className="formLoginReg">
        <h2>Logining form</h2>
        <label htmlFor={emailId}>E-mail</label>
        <Field id={emailId} name="email"></Field>
        <label htmlFor={passwordId}>Password</label>
        <Field id={passwordId} name="password" type="password"></Field>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
