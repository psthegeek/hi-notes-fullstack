import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CredentialsContext } from "../App";
// import { handleErrors } from "./Login";
import axios from "axios";
import {Link} from 'react-router-dom'
// import toast, { Toaster } from 'react-hot-toast';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setCredentials] = useContext(CredentialsContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/auth/register', { email, password })
      .then(response => {
        console.log('Registration successful:', response.data);
        setCredentials({email,password})
        // toast.success('Account Created Successfully!')
        setEmail('')
        setPassword('')
        // Redirect to login page
        // setTimeout(()=> {
        //   navigate('/login');
        // }, 1000)
        navigate('/login');
       
      })
      .catch(error => {
        console.error('Error registering:', error);
        // toast.error('Registration failed. Please try again.')
        setError('Registration failed. Please try again.');
      });
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 mb-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
            <div className='mt-4 flex min-h-screen justify-center'>
              <p><span className='underline'><Link to="/login">Already have a account?</Link></span> </p>
            </div>

            <div className="mb-4">
            {error && <span style={{ color: "red" }}>{error}</span>}
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
}