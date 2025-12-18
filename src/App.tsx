import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserDetails } from "./pages/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota principal (Home) */}
        <Route path="/" element={<Home />} />

        <Route path="/users/:id" element={<UserDetails />} />

        {/* Qualquer outra rota cai aqui */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-slate-500">
              404 - Página não encontrada
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
