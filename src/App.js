import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import Header from "./HeaderComponents/Header";
import ArticlesPage from "./ArticlesComponents/ArticlesPage";
import TopicsPage from "./TopicsComponents/TopicsPage";
import SingleArticle from "./ArticlesComponents/SingleArticle";
import SingleTopic from "./TopicsComponents/SingleTopic";
import LoginPage from "./LoginOutComponents/LoginPage";
import SignUpPage from "./LoginOutComponents/SignUpPage";
import Error from "./ErrorComponent/Error";
import ProfilePage from "./ProfilePageComponents/ProfilePage";
import "./App.css";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    if (localStorage.hasOwnProperty("user")) {
      let value = localStorage.getItem("user");

      value = JSON.parse(value);
      this.setState({ user: value });
    }
  }

  logInGuest = user => {
    localStorage.setItem("user", JSON.stringify(user));
    this.setState({ user });
    navigate(`/`);
  };

  updateAppUser = user => {
    this.setState({ user });
    localStorage.setItem("user", JSON.stringify(user));
    navigate(`/`);
  };

  logOutUser = bool => {
    this.setState({ user: null, userLogedIn: bool });
    localStorage.removeItem("user");
  };

  render() {
    const { user } = this.state;
    return (
      <div className="grid-container">
        <Header
          className="header"
          user={user}
          userLogedIn={this.state.userLogedIn}
          logOutUser={this.logOutUser}
        />
        <Router>
          <Error default />
          <ArticlesPage user={user} path="/" />
          <TopicsPage user={user} path="/topics" />
          <SingleArticle user={user} path="/articles/:article_id" />
          <SingleTopic path="/topics/:topicName" />
          <LoginPage
            logInGuest={this.logInGuest}
            updateAppUser={this.updateAppUser}
            path="/login"
          />
          <SignUpPage updateAppUser={this.updateAppUser} path="/sign-up" />
          <ProfilePage user={user} path="/profile" />
        </Router>
      </div>
    );
  }
}

export default App;
