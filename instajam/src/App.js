import React from "react";
import { Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import AlbumPage from "./components/pages/AlbumPage";
import TopNavigationBar from "./components/navigation/TopNavigationBar";

const App = ({ isAuthenticated }) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigationBar />}
    <Switch>
      <GuestRoute path="/" exact component={LoginPage} />
      <UserRoute path="/dashboard" exact component={DashboardPage} />
      <UserRoute path="/album/:id" exact component={AlbumPage} />
      <UserRoute path="/album/:id/:title" exact component={AlbumPage} />
    </Switch>
  </div>
);

function mapStateToProps(state) {
  return {
    isAuthenticated: Object.keys(state.user).length !== 0
  };
}

export default withRouter(connect(mapStateToProps)(App));
