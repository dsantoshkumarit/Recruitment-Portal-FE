import "./Styles/App.css";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CandidateDashboard from "./Components/CandidateDashboard";
import RecruiterDashboard from "./Components/RecruiterDashboard";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/candidateDashboard/candidateHome/:_id">
            <CandidateDashboard />
          </Route>
          <Route path="/recruiterDashboard">
            <RecruiterDashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
