import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("You are successfully logged in!");
      })
      .catch((error) => {
        toast.error(`Authorization error ${error}!`);
      });
    action.resetForm();
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Email
          <Field className={css.field} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.field} type="password" name="password" />
        </label>
        <button type="submit" className={css.btn}>
          Log in
        </button>
      </Form>
    </Formik>
  );
}
