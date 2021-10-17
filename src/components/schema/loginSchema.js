import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("This is not a valid email")
    .max(255)
    .required("This filed is mandatory"),
  password: yup.string().max(255).required("This filed is mandatory"),
  keeploggedIn: yup.boolean()
});

export default LoginSchema;
