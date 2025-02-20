import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

const Navbar = () => {
    const isAuthenticated = AuthService.isAuthenticated();
    const navigate = useNavigate();

    return (
        <nav className='navbar navbar-light bg-light px-3'>
            <a className='navbar-brand' href='/'>Clinic Appointments</a>
            <a className='navbar-brand' href='/contact'>Contact</a>
            <a className='navbar-brand' href='/about'>About</a>
            {isAuthenticated && (
                <button
                    className='btn btn-danger'
                    onClick={() => { AuthService.logout(); navigate("/login", { replace: true }) }}>Logout</button>
            )}
        </nav>
    )

}

export default Navbar;