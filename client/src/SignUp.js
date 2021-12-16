import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { UserContext } from "./UserContext";

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);

  const initialState = {
    username: "",
    email: "",
    password: "",
  };

  const [inputData, setInputData] = useState(initialState);

  const history = useHistory();

  const submitFunc = (ev) => {
    ev.preventDefault();

    const data = {
      username: inputData.username,
      email: inputData.email,
      password: inputData.password,
    };

    fetch("/api/profiles", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          history.push("/sign-in");
        } else {
          alert("information is wrong or missing.");
        }
      });
  };

  let readyToSubmit = false;

  if (
    inputData.username !== "" &&
    inputData.email !== "" &&
    inputData.password !== ""
  ) {
    readyToSubmit = true;
  }

  return (
    <Wrapper>
      <SignInBox>
        <h1>Sign Up</h1>
        <SignUpForm onSubmit={submitFunc}>
          <TextFields
            type="text"
            placeholder="Username"
            onChange={(ev) => {
              setInputData({ ...inputData, username: ev.target.value });
            }}
          />
          <TextFields
            type="email"
            placeholder="Email"
            onChange={(ev) => {
              setInputData({ ...inputData, email: ev.target.value });
            }}
          />
          <TextFields
            type="Password"
            placeholder="Password"
            onChange={(ev) => {
              setInputData({ ...inputData, password: ev.target.value });
            }}
          />
          <TextFields type="Password" placeholder="Confirm" />
          <SubmitButton type="submit" value="Sign Up" />
        </SignUpForm>
        <NeedSignIn href="/sign-in">Already have an account?</NeedSignIn>
      </SignInBox>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SignInBox = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
  background-color: var(--color-soft-amber);
`;

const SignUpForm = styled.form`
  margin-top: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextFields = styled.input`
  margin: 5px;
  width: 100%;
`;

const SubmitButton = styled.input`
  width: 100%;
  margin: 5px;
`;

const NeedSignIn = styled.a`
  margin-top: 10px;
`;
