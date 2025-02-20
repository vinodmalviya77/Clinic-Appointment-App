import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/AuthService";

const Login = () => {
    const [UserRole, setUserRole] = useState("");
    const [UserId, setUserId] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (AuthService.login(UserRole, UserId)) {
            navigate("/dashboard", { replace: true });
        } else {
            setError("Invalid Credentials");
        }
    }

    return (
        <>
            <div className='container mt-5'>
                <h2>Login</h2>
                {error && <p className='text-danger'>{error}</p>}

                <select value={UserRole} onChange={(e) => setUserRole(e.target.value)} >
                <option value="" selected>--select user type--</option>
                <option value="Admin">Admin</option>
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
                </select>
                <input
                    type='text'
                    className='form-control mb-2'
                    placeholder='User Id'
                    onChange={(e) => setUserId(e.target.value)} />
                <button className='btn btn-primary' onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

export default Login;