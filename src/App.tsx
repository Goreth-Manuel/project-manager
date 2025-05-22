
import { GlobalStyle } from './styles/global';
import { makeServer } from './api/mirageServer';
import MotionDvd from './components/motion/motionDvd';
import AppRoutes from './routes/routes';

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
      <AppRoutes />
    </div>
  );
}
