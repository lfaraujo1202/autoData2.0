import { PageDashboard } from "./Pages/Dashboard";
import { PageWatch } from "./Pages/Watch";
import { Home } from "./Pages/Home";
import { PageLogin } from "./Pages/Login";
import { useState } from "react";
import { CourseContext } from '../src/components/Card';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



export function App() {

  const [courseCycle, setCourseCycle] = useState('')

  return (
    <CourseContext.Provider value={{ courseCycle, setCourseCycle }}>
      <Router>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/dashboard" component={PageDashboard}/>
            <Route path="/watch" component={PageWatch}/>
            <Route path="/login" component={PageLogin}/>
          </Switch>
      </Router>
    </CourseContext.Provider>
  );
}
