import './App.css';
import Main from './components/Main';
import Gallery from './components/Gallery';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
      
      <div className='content'>
      <Switch>
      <Route exact path="/components" component={Main}>
      <Main />
      </Route>
      <Route exact path="/components" component={Gallery}>
      <Gallery />
      </Route>
      

      </Switch>
      </div>
    </div>
    </Router>
  );
}
export default App;
