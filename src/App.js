import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { Navbar } from "./components/navbar/_Navbar";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <div className="App">
      <Auth>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </Auth>
    </div>
  );
}

export default App;
