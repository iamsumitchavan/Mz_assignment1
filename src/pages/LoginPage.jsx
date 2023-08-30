import Input from "./Input";
import * as Yup from "yup";
import { Formik, Form, useFormik, withFormik } from "formik";
import Button from "../component/Button";
import GoogleButton from "react-google-button";

const handleSubmitForm = (values, bag) => {
  console.log(bag);
  bag.props.logIn(values.email, values.password);
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8, "password must be 8 length number")
    .max(8, "password must be 8 length number")
    .required(),
});

const inititalValues = {
  email: "",
  password: "",
};

function LoginPage({
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  touched,
  logIn,
  googleSignIn,
}) {
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-10 shadow-2xl "
        >
          <div>
            <Input
              label="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="email"
              id="email"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.email}
              touched={touched.email}
            />
          </div>
          <div>
            <Input
              label="password"
              type="password"
              name="password"
              autoComplete="password"
              placeholder="password"
              id="password"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.password}
              touched={touched.password}
            />
          </div>
          <div className="py-2 flex flex-col gap-2">
            <div>
              <Button />
            </div>
            <div>
              <GoogleButton
                onClick={handleGoogleSignIn}
                className="min-w-full py-1 bg-black text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const FormikLogin = withFormik({
  inititalValues: inititalValues,
  validationSchema: schema,
  handleSubmit: handleSubmitForm,
})(LoginPage);
export default FormikLogin;
