import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ForSchools from './components/ForSchools_SSS';
import GeneralAndHigher from './components/GeneralAndHigher_SSS';
import Business from './components/Business_SSS';
import NavigationBar from './components/NavigationBar';
import Footer_SSS from './components/Footer_SSS';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import Error from './components/Error';


function App() {
  const marqueeStyle = {
    backgroundColor: '#302C73',
    color: '#FFFFFF'
  };
  return (
    <Router>
      <NavigationBar/>
      <Marquee direction = "left"  style={marqueeStyle}>Job Oriented Courses Commensing shortly.</Marquee>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/forSchools" component={ForSchools} />
        <Route path="/generalAndHigher" component={GeneralAndHigher} />
        <Route path="/business" component={Business} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer_SSS/>
    </Router>
  );
}

export default App;