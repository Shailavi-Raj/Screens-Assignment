import "./styles/main.css";
import { Route, Switch } from "react-router-dom";
import Login from "./screens/Login";
import List from "./screens/List";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/tickets" component={List} />
      </Switch>
    </div>
  );
}

export default App;
