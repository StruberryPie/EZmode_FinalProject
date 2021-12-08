import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { UserContext } from "./UserContext";

const SignIn = () => {
  const { users, isLoaded, currentUser, setCurrentUser } =
    useContext(UserContext);

  const [enteredEmail, setEnteredEmail] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push(`/profile/${currentUser._id}`);
    }
  }, []);

  const submitFunc = () => {
    const isMember = users.find((email) => {
      return email.email === enteredEmail;
    });

    if (isMember) {
      setCurrentUser(isMember);
      sessionStorage.setItem("loggedInUser", JSON.stringify(isMember));
      history.push(`/prfile/${isMember._id}`);
    } else {
      setCurrentUser("");
    }
    console.log("is member");
  };

  return (
    <Wrapper>
      <SignUpBox>
        <h1>Sign In</h1>
        <SignInForm onSubmit={submitFunc}>
          <TextFields
            type="email"
            placeholder="Email"
            value={enteredEmail}
            onChange={(ev) => {
              setEnteredEmail(ev.target.value);
            }}
          />
          <TextFields type="password" placeholder="Password" />
          <SubmitButton type="submit" value="Sign In" />
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

const SubmitButton = styled.input`
  width: 100%;
  margin: 5px;
`;

const NeedSignUp = styled.a`
  margin-top: 10px;
`;
