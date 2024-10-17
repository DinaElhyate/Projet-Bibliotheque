import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home1 from "./pages/Home1";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
    ],
    
  },
  {
    path: "/register",
    element: <Register />,
  },
  
]);

function App() {
  return (
    <div >
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
