import * as Yup from "yup";
export const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8, "password must be 8 length number")
    .max(12, "password must be 8 length number")
    .required(),
});

export const inititalValues = {
  email: "",
  password: "",
};
