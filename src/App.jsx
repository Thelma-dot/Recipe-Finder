import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx"; // Import ErrorBoundary

// Pages
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import Recipes from "./pages/Recipes.jsx";
import Blogs from "./pages/Blogs.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Pages from "./pages/Pages.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import NotFound from "./pages/NotFound.jsx";

import CategoryCard from "./components/CategoryCard.jsx";


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;

