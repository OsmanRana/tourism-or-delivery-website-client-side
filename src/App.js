
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ManageAllBookings from './components/AdminDashboard/ManageAllBookings';
import Booking from './components/Booking/Booking';
import AuthProvider from './components/contexts/AuthProvider';
import Home from './components/Home/Home';
import PackageDetails from './components/Home/Packages/PackageDetails';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer';
import Navigation from './components/Shared/Navigation';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap container">
        <AuthProvider>
          <Router>
            <Navigation />
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <PrivateRoute exact path='/mybookings'>
                <Booking></Booking>
              </PrivateRoute>
              <PrivateRoute path='/manageallbookings'>
                <ManageAllBookings></ManageAllBookings>
              </PrivateRoute>
              <PrivateRoute exact path='/packages/:packageId'>
                <PackageDetails></PackageDetails>
              </PrivateRoute>
              <Route path='/login'>
                <Login></Login>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
