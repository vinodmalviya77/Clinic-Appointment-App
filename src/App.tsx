import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthService from "./Services/AuthService";
import Navbar from "./Components/Navbar";
import Unauthorized from "./Components/Unauthorized";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Dashboard from "./Components/Dashboard";
import Contact from './Components/Contact';
import About from './Components/About';

const App = () => {
  const isAuthenticated = AuthService.isAuthenticated();

  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute allowedRoutes={["Admin","Doctor","Patient"]}><Dashboard /></ProtectedRoute>}></Route>
            <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}></Route>
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router >
    </>

  )
}

export default App;

