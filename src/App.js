import JobApplication from "./components/Form";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <JobApplication /> */}
        <Route
          path="/"
          component={JobApplication}
          exact={true}
        />
        <Route
          path="/admin"
          component={AdminDashboard}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
