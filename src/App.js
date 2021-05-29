import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ForSchools from './components/ForSchools_SSS';
import GeneralAndHigher from './components/GeneralAndHigher_SSS';
import Business from './components/Business_SSS';
import NavigationBar from './components/NavigationBar';
import Footer_SSS from './components/Footer_SSS';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/forSchools" component={ForSchools} />
        <Route path="/generalAndHigher" component={GeneralAndHigher} />
        <Route path="/business" component={Business} />
      </Switch>
      <Footer_SSS />
    </Router>
  );
}

export default App;