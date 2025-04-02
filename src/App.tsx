import { RouterProvider } from 'react-router-dom';
import  Routes  from "./routes/routes"
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <div className="App">
      <GlobalStyle/>
     <RouterProvider router={Routes} />
    </div>
  );
}
