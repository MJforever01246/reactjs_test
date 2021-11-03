import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginScreen } from "./LoginScreen/LoginScreen";
import { ContentScreen } from "./anotherContent/contentScreen.jsx"
// import { loginForm } from "./demoLogin/loginScreen";
//import CenteredGrid from "./anotherContent/contentScreen";
import { ContentScreen_flex } from "./ContentScreen/ContentScreen";
export default function App() {
  return (
    <Router>
        <Switch>
          
          <Route path="/content/">
            <ContentScreen />
          </Route>
          <Route path="/">
            <ContentScreen_flex />
          </Route>
        </Switch>
    </Router>
  );
}
{/* <Route path="/">
            <LoginScreen />
          </Route> */}