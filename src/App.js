
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddNewPackage from './components/AdminDashboard/AddNewPackage';
import AddNewPackageUser from './components/AdminDashboard/AddNewPackageUser';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import AllPackages from './components/AdminDashboard/AllPackages';
import ManageAllBookings from './components/AdminDashboard/ManageAllBookings';
import Booking from './components/Booking/Booking';
import AuthProvider from './components/contexts/AuthProvider';
import Home from './components/Home/Home';
import PackageDetails from './components/Home/Packages/PackageDetails';
import AdminLogin from './components/Login/AdminLogIn';
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
              <Route exact path='/mybookings'>
                <Booking></Booking>
              </Route>
              <Route path='/manageallbookings'>
                <ManageAllBookings></ManageAllBookings>
              </Route>
              <PrivateRoute exact path='/packages/:packageId'>
                <PackageDetails></PackageDetails>
              </PrivateRoute>
              <Route exact path='/addnewpackage'>
                <AddNewPackage></AddNewPackage>
              </Route>
              <Route exact path='/addnewpackageuser'>
                <AddNewPackageUser></AddNewPackageUser>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='/adminlogin'>
                <AdminLogin></AdminLogin>
              </Route>
              <Route path='/admindashboard'>
                <AdminDashboard></AdminDashboard>
              </Route>
              <PrivateRoute path='/allpackages'>
                <AllPackages></AllPackages>
              </PrivateRoute>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
