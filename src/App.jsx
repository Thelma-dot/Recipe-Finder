import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import RecipeDetails from "./pages/RecipeDetails";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Pages from "./pages/Pages";
import Login from "./pages/Login";     // 👈 Import Login
import Signup from "./pages/Signup";   // 👈 Import Signup
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/login" element={<Login />} />       {/* ✅ Login route */}
        <Route path="/signup" element={<Signup />} />     {/* ✅ Signup route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
