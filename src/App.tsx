import { PageDashboard } from "./Pages/Dashboard";
import { PageWatch } from "./Pages/Watch";
import { Home } from "./Pages/Home";
import { PageLogin } from "./Pages/Login";
import { RegisterPage } from "./Pages/Register";
import { AutoData } from "./Pages/AutoData";
import axios from 'axios';
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { CourseContext } from '../src/components/Card';
import { useState } from "react";
import AnimatedRoutes from "./AnimatedRoutes";

var userToken = "Bearer " + sessionStorage.getItem("userToken");
axios.defaults.headers.common['authorization'] = userToken;

const instance = axios.create({
  baseURL: 'https://apiautodata.herokuapp.com/'
});

axios.defaults.baseURL = 'https://apiautodata.herokuapp.com/';

function App() {
  const [courseCycle, setCourseCycle] = useState('')

  return (
      <CourseContext.Provider value={{ courseCycle, setCourseCycle }}>
        <AnimatedRoutes />
      </CourseContext.Provider>
  )
}
export default App;