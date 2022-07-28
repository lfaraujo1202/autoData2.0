import axios from 'axios';
import { CourseContextProvider } from './contexts/CourseContext'
import AnimatedRoutes from "./AnimatedRoutes";

var userToken = "Bearer " + sessionStorage.getItem("userToken");
axios.defaults.headers.common['authorization'] = userToken;

axios.create({
  baseURL: 'https://apiautodata.herokuapp.com/'
});

axios.defaults.baseURL = 'https://apiautodata.herokuapp.com/';

function App() {

  return (
    <CourseContextProvider>
      <AnimatedRoutes />
    </CourseContextProvider>
  )
}
export default App;