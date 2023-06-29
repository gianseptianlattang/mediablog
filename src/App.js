import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { Navbar } from "./components/navbar/_Navbar";
import Auth from "./components/auth/Auth";
import { CategoryPage } from "./pages/CategoryPage";
import { AdminPage } from "./pages/AdminPage";
import { LikedPage } from "./pages/LikedPage";
import { CreatePage } from "./pages/CreatePage";

function App() {
  return (
    <div className="App">
      <Auth>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/category" element={<CategoryPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/liked" element={<LikedPage />}></Route>
          <Route path="/write" element={<CreatePage />}></Route>
        </Routes>
      </Auth>
    </div>
  );
}

export default App;
