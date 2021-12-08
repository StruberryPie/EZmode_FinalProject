import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const NavBar = () => {
  const history = useHistory();

  const homeFunc = () => {
    history.push("/");
  };

  const SignInFunc = () => {
    history.push("/sign-in");
  };

  const profileFunc = () => {
    history.push("/profile");
  };

  return (
    <Wrapper>
      <Logo onClick={homeFunc}>
        <b>EZ mode</b>
      </Logo>
      <RightSideNav>
        <NavButton onClick={profileFunc}>Profile</NavButton>
        <NavButton onClick={SignInFunc}>Log In</NavButton>
      </RightSideNav>
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

const RightSideNav = styled.div`
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
