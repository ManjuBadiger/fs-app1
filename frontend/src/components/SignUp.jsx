import {useState} from 'react'
import axios from 'axios'
import Loading from './Loading'
import { REGISTER_URL } from '../constants'

function SignUp() {
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('')
    const handleSignUp = async () => {
        try {
             setIsLoading(true)
            const payload = {...formData}
            const response = await axios.post(REGISTER_URL, {
                "name":payload.name,
                "email":payload.email,
                "password":payload.password,
                "address":payload.address
            })
            setFormData({})
            setStatus(response?.data?.message)
            setIsLoading(false)
            } catch(error) {
                setStatus(error.message)
            setIsLoading(false)
        }
       
    }
    const handleChange = (ev) => {
        setFormData((prevData) => ({...prevData,[ev.target.name]:ev.target.value}))
    }
    return (
        <>
        {isLoading && <Loading />}
        <p>User Registration</p>
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} required={true} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="email">E Mail</label>
                <input type="email" id="email" name="email" value={formData.email} required={true} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formData.password} required={true} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
            </div>
            <button type="button" onClick={handleSignUp}>Sign Up</button>
            <div>{status}</div>
        </form>
        </>
        
    )
}

export default SignUp;