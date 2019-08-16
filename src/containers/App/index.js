import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from '../Home';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    position: relative;
  }

  html {
    font-family: monospace, sans-serif;
    font-size: 16px;
    height: 100%;
  }

  body {
    min-height: 100%;
    margin: 0;
    display: flex;
  }

  #app-root {
    background-color: #efefef;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path={`/`} component={Home}/>
        </Switch>
        <GlobalStyle/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
