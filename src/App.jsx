import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Career from "./pages/Career";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="react-portfolio/" element={<MainLayout />}>
      <Route index element={<Hero />} />
      <Route path="skills" element={<Skills />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="career" element={<Career />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
