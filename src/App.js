import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="app">
      <Router>
		  <Switch>
			  <Route exact path="/">
				  <Login />
			  </Route>
		  </Switch>
	  </Router>
    </div>
  );
}

export default App;
