import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const NavBar = () => {
  const history = useHistory();

  const homeFunc = () => {
    history.push("/");
  };

  const playerFunc = () => {
    history.push("/player");
  };

  const gameMasterFunc = () => {
    history.push("/game-master");
  };

  const SignInFunc = () => {
    history.push("/sign-in");
  };

  return (
    <Wrapper>
      <LeftSideNav>
        <Logo onClick={homeFunc}>
          <b>EZ mode</b>
        </Logo>
        <NavButton onClick={playerFunc}>Player</NavButton>
        <NavButton onClick={gameMasterFunc}>GameMaster</NavButton>
      </LeftSideNav>
      <NavButton onClick={SignInFunc}>Log In</NavButton>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: grey;
  padding: 10px;
`;

const LeftSideNav = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;

const NavButton = styled.button`
  cursor: pointer;
  margin: 0 5px;
`;
