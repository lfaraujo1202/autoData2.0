import { PageDashboard } from "./Pages/Dashboard";
import { PageWatch } from "./Pages/Watch";
import { Home } from "./Pages/Home";
import { PageLogin } from "./Pages/Login";
import { RegisterPage } from "./Pages/Register";
import { useState } from "react";
import { CourseContext } from '../src/components/Card';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

var userToken = "Bearer " + sessionStorage.getItem("userToken");
axios.defaults.headers.common['Authorization'] = userToken;

const instance = axios.create({
  baseURL: 'https://apiautodata.herokuapp.com/'
});

axios.defaults.baseURL = 'https://apiautodata.herokuapp.com/';

export function App() {

  const [courseCycle, setCourseCycle] = useState('')

  return (
    <CourseContext.Provider value={{ courseCycle, setCourseCycle }}>
      <Router>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/dashboard" component={PageDashboard}/>
            <Route path="/watch" component={PageWatch}/>
            <Route path="/create" component={RegisterPage}/>
            <Route path="/" component={PageLogin}/>
          </Switch>
      </Router>
    </CourseContext.Provider>
  );
}
