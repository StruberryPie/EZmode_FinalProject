import React, { useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { UserContext } from "./UserContext";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  const history = useHistory();

  const homeFunc = () => {
    history.push("/");
  };

  const SignInFunc = () => {
    history.push("/sign-in");
  };

  const profileFunc = () => {
    history.push(`/profile/${currentUser._id}`);
  };

  return (
    <Wrapper>
      <Logo onClick={homeFunc}>
        <b>EZ mode</b>
      </Logo>
      <RightSideNav>
        {currentUser ? (
          <NavButton onClick={profileFunc}>{currentUser.username}</NavButton>
        ) : (
          <NavButton onClick={SignInFunc}>Log In</NavButton>
        )}
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
  border-style: solid double;
  border-color: black;
  border-width: 2px 6px;
`;
