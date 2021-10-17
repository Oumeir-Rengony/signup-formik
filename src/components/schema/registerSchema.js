import * as yup from "yup";

const areaOfSpeciality = ["Mauritius", "Madagascar", "France"];

const secondarySpeciality = ["Mauritius", "Madagascar", "France"];

const countryOptions = ["Mauritius", "Madagascar", "France"];

const RegisterSchema = yup.object().shape({
  firstname: yup.string().max(255).required("field mandatory"),
  lastname: yup.string().max(255).required("field mandatory"),
  areaOfSpeciality: yup
    .string()
    .oneOf(areaOfSpeciality, "not a valid choice")
    .required("field mandatory"),
  secondarySpeciality: yup
    .string()
    .oneOf(secondarySpeciality, "not a valid choice"),
  street: yup.string().max(255),
  city: yup.string().max(255),
  state: yup.string().max(255),
  zipcode: yup.string().max(10),
  country: yup
    .string()
    .oneOf(countryOptions, "not a valid choice")
    .required("field mandatory"),
  region: yup.string().max(255),
  email: yup
    .string()
    .email("not a valid email")
    .max(255)
    .required("field mandatory"),
  emailConfirmation: yup
    .string()
    .email()
    .max(255)
    .test("email-match", "Email does not match", function (value) {
      return this.parent.email === value;
    }),
  password: yup.string().max(255).required("field mandatory"),
  passwordConfirmation: yup
    .string()
    .max(255)
    .test("password-match", "Passwords does not match", function (value) {
      return this.parent.password === value;
    }),
  associatedProduction: yup.string().max(255),
  ageConsent: yup.boolean().oneOf([true], "you must agree to the age consent"),
  termsCondition: yup
    .boolean()
    .oneOf(
      [true],
      "you must agree to the terms & condition and privacy policy"
    ),
  newsletter: yup.boolean()
});

export default RegisterSchema;
