import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AnimesPage from "./pages/AnimesPage";
import FavoritesPage from "./pages/FavoritesPage";
import HistoryPage from "./pages/HistoryPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App max-w-screen-lg mx-auto p-4">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/animes" element={<AnimesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/" element={<div>Bienvenido a SparkyRoll</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
