import { useState } from "react";
import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import "./styles.css";

export default function App() {
  const [state, setState] = useState("signup");

  return (
    <Wrapper className="App">
      <header>
        <button onClick={() => setState("login")}>Login</button>
        <button onClick={() => setState("signup")}>Sign up</button>
      </header>

      <div className={state === "signup" ? "show" : "hide"}>
        <RegisterForm />
      </div>

      <div className={state === "login" ? "show" : "hide"}>
        <LoginForm />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  header {
    display: flex;
    justify-content: center;

    button {
      border: none;
      padding: 6px 12px;
      border-radius: 12px;
      text-decoration: none;
      background: #5770ce;
      color: #ffffff;
      font-size: 18px;
      cursor: pointer;
      margin: 20px;
    }
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }
`;
