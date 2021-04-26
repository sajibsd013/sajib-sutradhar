import './App.css';
import Education from './Components/Education/Education';
import Header from './Components/Header/Header';
import Navigation from './Components/Navbar/Navigation';
import Skill from './Components/Skill/Skill';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Notfound from './Components/Notfound/Notfound';
import NEUB from './Components/NEUB/NEUB';
import Currency from './Components/Tools/Currency/Currency';
import {Provider} from 'react-redux';
import myStore from './Redux/store';
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Provider store={myStore} >
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Header> </Header>
          </Route>
          <Route path='/About'>
            <About></About>
          </Route>
          <Route path='/Skill'>
            <Skill></Skill>
          </Route>
          <Route path='/Education'>
            <Education></Education>
          </Route>
          <Route path='/Contact'>
            <Contact></Contact>
          </Route>
          <Route path='/NEUB'>
            <NEUB></NEUB>
          </Route>
          <Route path='/Currency'>
            <Currency ></Currency>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </Provider>
  );
}
export default App;
