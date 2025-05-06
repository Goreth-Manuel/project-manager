import { RouterProvider } from 'react-router-dom';
import  Routes  from "./routes/routes"
import { GlobalStyle } from './styles/global';
import { makeServer } from './api/mirageServer';
import MotionDvd from './components/motion/motionDvd';

// if (process.env.NODE_ENV === "development") {
//   makeServer();
// }

if (import.meta.env.NODE_ENV === "development") {
  makeServer();
}

export default function App() {
  return (
    <div className="App" style={{position: "relative", width: "100vw", height: "100vh"}}>
      <GlobalStyle/>
      <MotionDvd/> 
     <RouterProvider router={Routes} />
    </div>
  );
}
