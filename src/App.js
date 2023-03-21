import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// IMPORT PAGES
import Home from "./routes/Home";
import ErrorPage from './routes/ErrorPage';
import About from './routes/About';
import Menu from './routes/Menu';
import Reservations from './routes/Reservations';
import Order from './routes/Order';



// REACT ROUTER IMPORTS
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ROUTES
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "reservations",
    element: <Reservations />,
  },
  {
    path: "order",
    element: <Order />,
  },
]);

function App() {
  return (
    <>
      <Main>
        <RouterProvider router={router} />
      </Main>
    </>
  );
}

export default App;
