import React from "react";
import Navbar from "./Navbar";
import GitComponent from "./GitComponent";
import Search from "./Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
class App extends React.Component {
  render() {
    const { user, isLoggedIn } = this.props.Auth;
    const search = true;
    return (
      <div>
        <div className="App">
          {isLoggedIn ? (
            <div className="AppContainer">
              <Router>
                <Navbar />
                <Search />
                {search && (
                  <Switch>
                    <Route path="/" component={GitComponent} />
                  </Switch>
                )}
              </Router>
            </div>
          ) : (
            <div className="AppContainer">
              <div className="login"></div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Auth: state.Auth,
  };
}
export default connect(mapStateToProps)(App);
