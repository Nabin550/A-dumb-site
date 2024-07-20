import "./App.css";
import SignIn from "./pages/landing_page/sign_in";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Side_Nav from "./components/side_nav/Side_nav";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Home" element={<Side_Nav />} />
      </Routes>
    </Router>
  );
}

export default App;
