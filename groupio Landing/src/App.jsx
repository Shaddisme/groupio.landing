import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import RootLayout from "./pages/RootLayout";
import LandingPage from "./pages/LandingPage";

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
