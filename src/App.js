
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PackageDetails from './components/Home/Packages/PackageDetails';
import Footer from './components/Shared/Footer';
import Navigation from './components/Shared/Navigation';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap container">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/packages/:packageId'>
              <PackageDetails></PackageDetails>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
