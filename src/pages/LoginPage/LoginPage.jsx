import { Formik, Form, Field } from "formik";
import { useId } from "react";

export default function LoginPage(submit) {
  const emailId = useId();
  const passwordId = useId();

  function doSubmit(values, action) {
    submit(values);
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
