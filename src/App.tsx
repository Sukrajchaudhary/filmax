import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Actors from "./screens/Actors";
import Movie from "./screens/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/actors/:id",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
]);

function App() {
  return (
    <div>
      <Navbar />
      <main className="my-12 ml-8">
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

export default App;
