import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {


  const routes = createBrowserRouter(
    [{
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "/about",
          element: <About />
        }, {
          path: "/portfolio",
          element: <Portfolio />
        }, {
          path: "/contact",
          element: <Contact />
        }, {
          path: "/",
          element: <Home />
        }, {
          path: "*",
          element: <NotFound />
        }
      ]
    }]
  )

  return (
    <RouterProvider router={routes} />
  )
}

export default App
