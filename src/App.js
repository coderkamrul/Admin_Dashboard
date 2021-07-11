import React from "react";
import "./app.css"
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UserList from "./pages/usersList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/users">
          <UserList />
          </Route>
          <Route exact path="/user/:userId">
          <User/>
          </Route>
          <Route exact path="/newUser">
          <NewUser/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
