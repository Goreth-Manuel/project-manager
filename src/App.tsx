import { RouterProvider } from 'react-router-dom';
import  Routes  from "./routes/routes"
import { GlobalStyle } from './styles/global';
import { makeServer } from './api/mirageServer';

// if (process.env.NODE_ENV === "development") {
//   makeServer();
// }

if (import.meta.env.NODE_ENV === "development") {
  makeServer();
}

export default function App() {
  return (
    <div className="App">
      <GlobalStyle/>
     <RouterProvider router={Routes} />
    </div>
  );
}
