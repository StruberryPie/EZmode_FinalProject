import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameMaster from "./GameMaster";
import GlogalStyles from "./GlobalStyles";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import Player from "./Player";
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
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/player">
              <Player />
            </Route>
            <Route exact path="/game-master">
              <GameMaster />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
