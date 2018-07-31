import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from '../features/IndexPage/IndexPage';
import NotFoundPage from '../features/NotFoundPage/NotFoundPage';

class App extends React.Component {
    
    render() {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      );
    }
  }
  
  export default App;