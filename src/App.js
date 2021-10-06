

import { Switch,Route,Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './components/About';
import Project from './components/Project';



function App() {
  return (
    <>
    <div className='nave'>
    <Navbar />
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/project" exact component={Project} />
      <Route path="/notfound" exact component={Home} />
      <Redirect to="/notfound" />
    </Switch>
    </>
  );
}

export default App;
