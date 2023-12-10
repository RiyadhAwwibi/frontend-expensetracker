import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import IncomesPages from "./pages/IncomesPages";
import ExpensePage from "./pages/ExpensePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-incomes" element={<IncomesPages />} />
        <Route path="/edit-incomes/:id" element={<IncomesPages />} />

        <Route path="/add-expense" element={<ExpensePage />} />
        <Route path="/edit-expense/:id" element={<ExpensePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
