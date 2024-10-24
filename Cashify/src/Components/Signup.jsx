import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../assets/image/logo.png';
import Swal from 'sweetalert2';

function Signup() {
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then((rez) => {
        setData(rez);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Data not found!',
        });
      });
  }, []); 

  localStorage.setItem("key", JSON.stringify(data));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const add_User = { name, email, phone, password };

    if (password !== cpassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'Passwords do not match! Please try again.',
      });
      return;
    }

    const emailExists = data && data.some((res) => res.email === add_User.email);
    if (emailExists) {
      Swal.fire({
        icon: 'error',
        title: 'Email Exists',
        text: 'An account with this email already exists!',
      });
      return;
    }

    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(add_User),
    })
    .then(() => {
      Swal.fire({
        title: 'Registration Successful!',
        text: 'You have successfully registered. Welcome!',
        icon: 'success',
        confirmButtonText: 'Continue',
      }).then(() => {
        navigate("/login");
      });
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Could not register the user. Please try again.',
      });
    });
  };

  return (
    <div className="flex justify-center items-center h-screen px-5 bg-transparent">
      <div className="bg-white p-10 w-96 rounded-2xl shadow-lg text-center text-gray-800 transition-transform duration-300">
        <div className="flex justify-center mb-5">
          <img src={logo} alt="Cashify Logo" className="w-24" />
        </div>
        <h2 className="text-2xl font-bold text-green-600 mb-5">Create an Account on Cashify</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} required className="block w-full max-w-md h-10 px-4 mb-4 border-2 border-gray-300 rounded-full bg-gray-100 focus:border-green-600 focus:outline-none focus:shadow-outline" />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className="block w-full max-w-md h-10 px-4 mb-4 border-2 border-gray-300 rounded-full bg-gray-100 focus:border-green-600 focus:outline-none focus:shadow-outline" />
          <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} required className="block w-full max-w-md h-10 px-4 mb-4 border-2 border-gray-300 rounded-full bg-gray-100 focus:border-green-600 focus:outline-none focus:shadow-outline" />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required className="block w-full max-w-md h-10 px-4 mb-4 border-2 border-gray-300 rounded-full bg-gray-100 focus:border-green-600 focus:outline-none focus:shadow-outline" />
          <input type="password" placeholder="Confirm Password" onChange={(e) => setCPassword(e.target.value)} required className="block w-full max-w-md h-10 px-4 mb-4 border-2 border-gray-300 rounded-full bg-gray-100 focus:border-green-600 focus:outline-none focus:shadow-outline" />
          <button type="submit" className="w-full h-10 bg-green-600 text-white font-semibold rounded-full transition-transform duration-200 hover:bg-green-700 transform hover:-translate-y-1">Sign Up</button>
        </form>
        <div className="mt-5">
          <Link to="" className="block mb-2 text-green-600 font-semibold hover:underline">Forgot Password?</Link>
          <Link to="/login" className="block text-green-600 font-semibold hover:underline">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
