import React from "react";
import Navbar from "./Navbar";
import GitComponent from "./GitComponent";
import Search from "./Search";
import Detail from "./Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
class App extends React.Component {
  render() {
    const isLoggedIn = true;
    const { searchedUser } = this.props.Search;
    return (
      <div>
        <div className="App">
          {isLoggedIn ? (
            <div className="AppContainer">
              <Router>
                <Navbar />
                <Search />
                {searchedUser && (
                  <Switch>
                    <Route exact path="/" component={GitComponent} />
                    <Route exact path="/repo/:id" component={Detail} />
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
    Search: state.Search,
  };
}
export default connect(mapStateToProps)(App);
