import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const HomePage = () => {
  const history = useHistory();

  const signInFunc = () => {
    history.push("/sign-in");
  };

  const signUpFunc = () => {
    history.push("/sign-Up");
  };

  return (
    <Wrapper>
      <WelcomeBox>
        <WelcomeMessage>
          <h1>Hello and Welcome!</h1>
          <p>
            This is <i>EZ mode</i> table top. We are here to assist in the
            introduction of table top role play gaming. Trying to automate as
            much as we can to make your experiance EZ.
          </p>
          <p>
            If you are new, please click below to create a profile and get
            started on your trek.
          </p>
          <p>
            If you have an accout then click below and continue your adventures.
          </p>
        </WelcomeMessage>
        <ButtonBox>
          <Button onClick={signInFunc}>Sign In</Button>
          <Button onClick={signUpFunc}>Sign Up</Button>
        </ButtonBox>
      </WelcomeBox>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
`;

const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  min-width: 320px;
  padding: 30px;
  border-radius: 10px;
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
`;

const WelcomeMessage = styled.p`
  text-align: center;
  line-height: 200%;
`;

const ButtonBox = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  margin: 0 5px;
`;
