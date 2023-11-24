import { Navbar } from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SolicitationList from "../pages/SolicitationList";
import { FormDataProvider } from "../context/list";

/*
 * Router: wrapper para as rotas. High Order Component
 * FormDataProvider: context provider dos dados do formulário.
 * Navbar: componente de navegação.
 * Routes: componente de rotas.
 */

function App() {
  return (
    <>
      <Router>
        <FormDataProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/list' element={<SolicitationList />} />
          </Routes>
        </FormDataProvider>
      </Router>
    </>
  );
}

export default App;
