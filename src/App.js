import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard.js";
import Faq from "./pages/Faq";
import Signup from "./pages/Signup";
import Adminlogin from "./new/Adminlogin";
import Days from "./new/newpages/Days";
import Feedback from "./new/newpages/Feedback";
import Centers from "./new/newpages/Centers";
import Report from "./new/newpages/Report";
import Vaccine from "./new/newpages/Vaccine";
import UserDetails from "./new/newpages/UserDetails";
import LoginForm from "./pages/LoginForm";
import LoginPage from "./new/newpages/LoginPage";
import Addvaccine from "./new/newpages/Addvaccine";
import Addcenter from "./new/newpages/Addcenter";
import Feed from "./pages/Feed";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/adminlogin" component={Adminlogin} />
        <Route exact path="/centers" component={Centers} />
        <Route exact path="/days" component={Days} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/vaccine" component={Vaccine} />
        <Route exact path="/userdetails" component={UserDetails} />
        <Route exact path="/loginForm" component={LoginForm} />
        <Route exact path="/loginpage" component={LoginPage} />
        <Route exact path="/addvaccine" component={Addvaccine} />
        <Route exact path="/addcenter" component={Addcenter} />
        <Route exact path="/feed" component={Feed} />
      </Switch>
    </div>
  );
}

export default App;
