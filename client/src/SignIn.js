import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { UserContext } from "./UserContext";

const SignIn = () => {
  const {
    users,
    isLoaded,
    currentUser,
    setCurrentUser,
    characters,
    setCharacters,
  } = useContext(UserContext);

  const [enteredEmail, setEnteredEmail] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push(`/profile/${currentUser._id}`);
    }
  }, []);

  const submitFunc = (ev) => {
    ev.preventDefault();

    fetch(`/api/profiles/email/${enteredEmail}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 200) {
          setCurrentUser(data.results);
          sessionStorage.setItem("loggedInUser", JSON.stringify(data.results));
          history.push(`/profile/${data.results._id}`);
        }
      });
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
          {/* password is currently not fuctional */}
          <TextFields type="password" placeholder="Password" />
          <SubmitButton type="submit" value="Sign In" />
        </SignInForm>
        <NeedSignUp href="/sign-up">Create an account?</NeedSignUp>
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
  background-color: var(--color-soft-amber);
`;

const SignInForm = styled.form`
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
