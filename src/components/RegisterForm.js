import { ErrorMessage, Formik } from "formik";
import styled from "styled-components";
import RegisterSchema from "./schema/registerSchema";

const RegisterForm = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    areaOfSpeciality: "",
    secondarySpeciality: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    region: "",
    email: "",
    emailConfirmation: "",
    password: "",
    passwordConfirmation: "",
    associatedProduction: "",
    ageConsent: false,
    termsCondition: false,
    newsletter: false
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("submitted");
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <div className="registration-details">
              <div className="field-group">
                <label className="field-group__label" htmlFor="firstname">
                  First Name*
                </label>
                <input
                  className={`field-group__input ${
                    touched.firstname && errors.firstname ? "invalid" : ""
                  }`}
                  type="text"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label className="field-group__label" htmlFor="lastname">
                  Last Name*
                </label>
                <input
                  className={`field-group__input ${
                    touched.lastname && errors.lastname ? "invalid" : ""
                  }`}
                  type="text"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="lastname"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label
                  className="field-group__label"
                  htmlFor="areaOfSpeciality"
                >
                  Area of Speciality*
                </label>
                <select
                  name="areaOfSpeciality"
                  className={`field-group__input`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" selected disabled hidden />
                  <option value="Mauritius">Mauritius</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="France">France</option>
                </select>

                <ErrorMessage
                  name="areaOfSpeciality"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label
                  className="field-group__label"
                  htmlFor="secondarySpeciality"
                >
                  Secondary Speciality
                </label>
                <select
                  name="secondarySpeciality"
                  className={`field-group__input`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" selected disabled hidden></option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="France">France</option>
                </select>

                <ErrorMessage
                  name="secondarySpeciality"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label className="field-group__label" htmlFor="street">
                  Street
                </label>
                <input
                  className={`field-group__input ${
                    touched.street && errors.street ? "invalid" : ""
                  }`}
                  type="text"
                  name="street"
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="street"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label className="field-group__label" htmlFor="city">
                  City
                </label>
                <input
                  className={`field-group__input ${
                    touched.city && errors.city ? "invalid" : ""
                  }`}
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="city"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label className="field-group__label" htmlFor="state">
                  State
                </label>
                <input
                  className={`field-group__input ${
                    touched.state && errors.state ? "invalid" : ""
                  }`}
                  type="text"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="street"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label className="field-group__label" htmlFor="zipcode">
                  Zip Code/ Post Code
                </label>
                <input
                  className={`field-group__input ${
                    touched.zipcode && errors.zipcode ? "invalid" : ""
                  }`}
                  type="text"
                  name="zipcode"
                  value={values.zipcode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="zipcode"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label className="field-group__label" htmlFor="country">
                  Country*
                </label>
                <select
                  name="country"
                  className={`field-group__input`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="" selected disabled hidden></option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="France">France</option>
                </select>

                <ErrorMessage
                  name="country"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label className="field-group__label" htmlFor="region">
                  Region/County
                </label>
                <input
                  className={`field-group__input ${
                    touched.region && errors.region ? "invalid" : ""
                  }`}
                  type="text"
                  name="region"
                  value={values.region}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="region"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label className="field-group__label" htmlFor="email">
                  Email Address*
                </label>
                <input
                  className={`field-group__input ${
                    touched.email && errors.email ? "invalid" : ""
                  }`}
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label
                  className="field-group__label"
                  htmlFor="emailConfirmation"
                >
                  Confirm Email Address*
                </label>
                <input
                  className={`field-group__input ${
                    touched.emailConfirmation && errors.emailConfirmation
                      ? "invalid"
                      : ""
                  }`}
                  type="text"
                  name="emailConfirmation"
                  value={values.emailConfirmation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="emailConfirmation"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label className="field-group__label" htmlFor="password">
                  Password*
                </label>
                <input
                  className={`field-group__input ${
                    touched.password && errors.password ? "invalid" : ""
                  }`}
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label
                  className="field-group__label"
                  htmlFor="passwordConfirmation"
                >
                  Confirm Password*
                </label>
                <input
                  className={`field-group__input ${
                    touched.passwordConfirmation && errors.passwordConfirmation
                      ? "invalid"
                      : ""
                  }`}
                  type="password"
                  name="passwordConfirmation"
                  value={values.passwordConfirmation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="passwordConfirmation"
                  component="div"
                  className="error-msg"
                />
              </div>

              <div className="field-group">
                <label
                  className="field-group__label"
                  htmlFor="associatedProduction"
                >
                  Associated Production
                </label>
                <input
                  className={`field-group__input ${
                    touched.associatedProduction && errors.associatedProduction
                      ? "invalid"
                      : ""
                  }`}
                  type="text"
                  name="associatedProduction"
                  value={values.associatedProduction}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <ErrorMessage
                  name="associatedProduction"
                  component="div"
                  className="error-msg"
                />
              </div>
            </div>
            <div className="optin-section">
              <div
                className={`checkbox-group ${
                  touched.ageConsent && errors.ageConsent ? "invalid" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="ageConsent"
                  value="ageConsent"
                  className={`checkbox-group__input ${
                    touched.ageConsent && errors.ageConsent ? "invalid" : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="checkbox-group__loggedin">
                  I confirm that i am over 18.
                </p>
              </div>

              <ErrorMessage
                name="ageConsent"
                component="div"
                className="error-msg checkbox-error"
              />

              <div
                className={`checkbox-group ${
                  touched.termsCondition && errors.termsCondition
                    ? "invalid"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="termsCondition"
                  value="termsCondition"
                  className="checkbox-group__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="checkbox-group__loggedin">
                  I confirm that i have read and agreed to the
                  <span>Terms & Condition</span> and{" "}
                  <span>Privacy Notice.</span>
                </p>
              </div>

              <ErrorMessage
                name="termsCondition"
                component="div"
                className="error-msg checkbox-error"
              />

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="newsletter"
                  value="newsletter"
                  className="checkbox-group__input"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="checkbox-group__loggedin">
                  I'd like to receive Flare Studio newsletters, updates and
                  other opportunities offered by the platform.
                </p>
              </div>
            </div>

            <input className="regitser-btn" type="submit" value="Register" />
          </form>
        </Wrapper>
      )}
    </Formik>
  );
};

const Wrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: solid gray 2px;

  @media (min-width: 992px) {
    border: 0;
    max-width: 860px;
  }

  .registration-details {
    @media (min-width: 992px) {
      display: flex;
      flex-wrap: wrap;
    }

    .field-group {
      position: relative;
      padding-bottom: 28px;

      @media (min-width: 992px) {
        flex: 50%;
        padding: 0 20px 28px;
      }

      .field-group__label {
        display: block;
        padding-bottom: 18px;
        font-weight: 600;
        color: #505050;
      }

      .field-group__input {
        width: 100%;
        border-width: 0 0 2px 0;
        border-style: solid;
        border-color: #e2e2e2;

        &.invalid {
          border-color: red;
        }
      }

      .field-group__input:focus {
        outline: none;
      }

      .forgot-password {
        padding-top: 8px;
        font-size: 13px;

        @media (min-width: 992px) {
          position: absolute;
          top: 0;
          right: 0;
          padding-top: 0;
        }
      }
    }
  }

  .optin-section {
    @media (min-width: 992px) {
      padding: 0 20px 28px;
    }

    .checkbox-group {
      display: flex;
      padding-bottom: 16px;

      .checkbox-group__input {
        height: 14px;
      }

      .checkbox-group__loggedin {
        font-size: 14px;
        padding-left: 5px;
      }

      &.invalid {
        padding-bottom: 0;
      }
    }
  }

  .error-msg {
    color: red;
    font-size: 14px;
    padding-top: 4px;
  }

  .checkbox-error {
    padding: 0 20px 12px;
  }

  .regitser-btn {
    display: block;
    margin: 0 auto;
    padding: 12px 24px;
    border: none;
    border-radius: 12px;
    text-decoration: none;
    background: #5770ce;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
  }
`;

export default RegisterForm;
