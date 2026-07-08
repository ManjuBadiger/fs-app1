import {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { LOGIN_URL } from '../constants'


function Login(){
    const [formData, setFormData] = useState({})
    const navigate = useNavigate();
    const handleChange = (ev) => {
        setFormData((prevData) => ({...prevData,[ev.target.name]: ev.target.value}))
    }

    const handleLogin = async (ev) => {
        ev.preventDefault()
        const response = await axios.post(LOGIN_URL, {
            "email": formData.email,
            "password":formData.password
        })
       if(response.status === 200) {
            localStorage.setItem('token',response.data)
            navigate("/products")
       }
    }
    return (
       
        <form>
             <div className="form-group">
            <label htmlFor="email">E Mail</label>
            <input type="text" id="email" name="email" onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"  onChange={handleChange} />
            </div>
            <button type="button" onClick={handleLogin}>Login</button>
            <div>
                <Link to="/signup">Don't have account? Register</Link>
            </div>
        </form>
       
        
    )
}

export default Login;