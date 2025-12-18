import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
// Importaremos o UserDetails aqui depois
// import { UserDetails } from './pages/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the Dashboard/Home page */}
        <Route path="/" element={<Home />} />

        {/* Placeholder route for Details (we will create this next) */}
        <Route
          path="/users/:id"
          element={<div>Details Page Coming Soon</div>}
        />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
