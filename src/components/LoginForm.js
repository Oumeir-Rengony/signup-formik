import { Formik } from "formik";
import styled from "styled-components";
import LoginSchema from "./schema/loginSchema";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
    keeploggedIn: false
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <div className="field-group">
              <label className="field-group__label" htmlFor="email">
                Email
              </label>
              <input
                className={`field-group__input ${errors.email && "invalid"}`}
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label className="field-group__label" htmlFor="password">
                Password
              </label>
              <input
                className={`field-group__input ${errors.password && "invalid"}`}
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />

              <p className="forgot-password">Forgot your password?</p>
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                name="keeploggedIn"
                value="keeploggedIn"
                className="checkbox-group__input"
                onChange={handleChange}
              />
              <p className="checkbox-group__loggedin">Keep me logged in</p>
            </div>

            <div className="login">
              <input className="login-btn" type="submit" value="LOG IN" />
              <p className="register">NOT REGISTERED YET? SIGN UP</p>
            </div>
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
  }

  .field-group {
    position: relative;
    padding-bottom: 28px;

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
      padding-top: 14px;
      font-size: 13px;
      color: #5977e6;

      @media (min-width: 992px) {
        position: absolute;
        top: 0;
        right: 0;
        padding-top: 0;
      }
    }
  }

  .checkbox-group {
    display: flex;
    align-items: center;
    padding-bottom: 60px;

    .checkbox-group__input {
      height: 14px;
    }

    .checkbox-group__loggedin {
      font-size: 14px;
      padding-left: 5px;
    }
  }

  .login {
    text-align: center;

    .login-btn {
      border: none;
      padding: 12px 24px;
      margin-bottom: 32px;
      border-radius: 12px;
      text-decoration: none;
      background: #5770ce;
      color: #ffffff;
      font-size: 18px;
      cursor: pointer;
    }

    .register {
      font-size: 14px;
    }
  }
`;

export default LoginForm;
