import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { useState, useEffect } from 'react/cjs/react.development';
import Home from './Components/Home'
import Styles from './css/styles.module.css';

function App() {
  return (
   <Router>
     <div className={Styles.App}>
     <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
      </Switch>
     </div>
   </Router>
  );
}

export default App;
