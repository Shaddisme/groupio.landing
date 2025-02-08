import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import RootLayout from "../src/pages/Landingpage/RootLayout.jsx";
import LandingPage from "../src/pages/Landingpage/LandingPage.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
