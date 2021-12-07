import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Wrapper>
      <SignUpBox>
        <h1>Sign In</h1>
        <SignInForm>
          <TextFields type="email" placeholder="Email" />
          <TextFields type="password" placeholder="Password" />
          <SubmitButton>Sign In</SubmitButton>
        </SignInForm>
        <NeedSignUp href="/sign-up">Need an account?</NeedSignUp>
      </SignUpBox>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SignUpBox = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
`;

const SignInForm = styled.div`
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

const SubmitButton = styled.button`
  width: 100%;
  margin: 5px;
`;

const NeedSignUp = styled.a`
  margin-top: 10px;
`;
