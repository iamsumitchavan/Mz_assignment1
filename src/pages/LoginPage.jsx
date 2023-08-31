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
import { FcGoogle } from "react-icons/fc";

const handleSubmitForm = async (values, bag) => {
  try {
    await bag.props.logIn(values.email, values.password);
    bag.props.navigate("/home");
  } catch (err) {
    console.log("err", err);
  }
};

function LoginPage({
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  touched,
  googleSignIn,
  user,
}) {
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col pb-8 px-20 shadow-2xl "
        >
          <div className="py-8">
            <h1 className="text-5xl font-extrabold font-sans text-green-700 ">
              {" "}
              Login Now
            </h1>
          </div>
          <div>
            <Input
              label="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Enter Email"
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
              placeholder="Enter Password"
              id="password"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.password}
              touched={touched.password}
            />
          </div>
          <div className="py-2 flex flex-col gap-2">
            <div>
              <Button title="log in" />
            </div>

            <div className="mb-5">
              <button
                onClick={handleGoogleSignIn}
                className=" w-96 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
              >
                <div className="flex justify-center w-full gap-4">
                  <FcGoogle className="text-2xl" />
                  <span className="font-sans text-lg font-bold">
                    Login with Google
                  </span>
                </div>
              </button>
            </div>
            <div>
              <span className="font-mono text-indigo-500 text-lg ">
                dont have an account ?
              </span>{" "}
              <Link
                to="/signup"
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

const FormikLogin = withFormik({
  inititalValues: inititalValues,
  validationSchema: schema,
  handleSubmit: handleSubmitForm,
})(LoginPage);
export default WithUser(FormikLogin);
