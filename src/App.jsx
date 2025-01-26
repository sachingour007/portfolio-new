import react from "react";
import Homepage from "./pages/Homepage";
import Header from "./pages/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Homepage />
    </BrowserRouter>
  );
}

export default App;
