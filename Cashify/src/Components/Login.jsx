import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_login = (e) => {
    e.preventDefault();
    let logindata = { email, password };
    let user_data = localStorage.getItem("key");

    if (user_data) {
      let users = JSON.parse(user_data);
      const user = users.find((res) => res.email === logindata.email && res.password === logindata.password);

      if (user) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: 'Welcome back!',
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/');
        localStorage.setItem("email", email);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid email or password. Please try again.',
        });
      }

    } else {
      Swal.fire({
        icon: 'warning',
        title: 'User Not Found',
        text: 'No user data available. Please sign up.',
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen px-5 bg-transparent">
      <div className="bg-white p-10 w-96 rounded-2xl shadow-lg text-center text-gray-800 transition-transform duration-300">
        <div className="flex justify-center mb-5">
          <img src={logo} alt="Cashify Logo" className="w-24" />
        </div>
        <h2 className="text-2xl font-bold text-green-600 mb-5">Login to Cashify</h2>
        <form onSubmit={user_login}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full max-w-md h-10 px-4 mb-4 border-2 border-gray-300 rounded-full bg-gray-100 focus:border-green-600 focus:outline-none focus:shadow-outline" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="block w-full max-w-md h-10 px-4 mb-4 border-2 border-gray-300 rounded-full bg-gray-100 focus:border-green-600 focus:outline-none focus:shadow-outline" />
          <button type="submit" className="w-full h-10 bg-green-600 text-white font-semibold rounded-full transition-transform duration-200 hover:bg-green-700 transform hover:-translate-y-1">Login</button>
        </form>
        <div className="mt-5">
          <Link to="" className="block mb-2 text-green-600 font-semibold hover:underline">Forgot Password?</Link>
          <Link to="/signup" className="block text-green-600 font-semibold hover:underline">Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
