import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CharacterSheet from "./CharacterSheetRW/CharacterSheet";
import GlogalStyles from "./GlobalStyles";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Profile from "./Profile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlogalStyles />
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/profile/:_id">
              <Profile />
            </Route>
            <Route exact path="/character-create">
              <CharacterSheet />
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/sign-in">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
