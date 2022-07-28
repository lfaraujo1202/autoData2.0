import axios from 'axios';
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