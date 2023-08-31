import * as Yup from "yup";
export const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8, "password is too short")
    .max(12, "password is too long")
    .required(),
});

export const inititalValues = {
  email: "",
  password: "",
};
