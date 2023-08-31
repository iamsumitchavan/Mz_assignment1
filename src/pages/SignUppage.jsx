import Input from "./Input";
import * as Yup from "yup";
import { withFormik } from "formik";
import Button from "../component/Button";
import GoogleButton from "react-google-button";
import WithUser from "../component/WithUser";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { schema } from "../component/ValidationSchema";
import { inititalValues } from "../component/ValidationSchema";

const handleSubmitSignUpForm = async (values, bag) => {
  console.log(bag);
  try {
    await bag.props.signUp(values.email, values.password);
    bag.props.navigate("/");
  } catch (err) {
    console.log(err.message);
  }
};

function SignUppage({
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  touched,
}) {
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-20 shadow-2xl "
        >
          <div className="py-7">
            <h1 className="text-5xl font-extrabold font-sans text-green-700 ">
              Make Account
            </h1>
          </div>
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
          <div className="py-5 flex flex-col gap-2">
            <div>
              <Button title="sign up" />
            </div>

            <div className="pb-5 py-4">
              <span className="font-mono text-indigo-500 text-lg ">
                Already have an account ?
              </span>
              <Link
                to="/"
                className="text-xl   font-bold underline text-indigo-600"
              >
                click here
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const FormikSign = withFormik({
  inititalValues: inititalValues,
  validationSchema: schema,
  handleSubmit: handleSubmitSignUpForm,
})(SignUppage);
export default WithUser(FormikSign);
