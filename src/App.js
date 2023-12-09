import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import IncomesPages from "./pages/IncomesPages";
import ExpensePage from "./pages/ExpensePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/incomes" element={<IncomesPages />} />
        <Route path="/expense" element={<ExpensePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
