import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Wrapper>
      <SignInBox>
        <h1>Sign Up</h1>
        <SignUpForm>
          <TextFields type="text" placeholder="Username" />
          <TextFields type="email" placeholder="Email" />
          <TextFields type="Password" placeholder="Password" />
          <TextFields type="Password" placeholder="Confirm" />
          <SubmitButton>Sign Up</SubmitButton>
        </SignUpForm>
        <NeedSignIn href="/sign-in">Have an account?</NeedSignIn>
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
`;

const SignUpForm = styled.div`
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

const NeedSignIn = styled.a`
  margin-top: 10px;
`;
