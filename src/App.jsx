import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import RootLayout from "../src/pages/Landingpage/RootLayout.jsx";
import LandingPage from "../src/pages/Landingpage/LandingPage.jsx";
import Contact from "./pages/contactpage/Contact.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import Login from "./pages/auth/Login.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
