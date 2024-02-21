import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import bglogo from '../assets/loginpagebg.png';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  const divStyle = {
    backgroundImage: `url(${bglogo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={divStyle} className="min-h-screen flex items-center justify-start bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96 ml-48">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Mindfit</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-yellow-500"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="button"
            className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="text-yellow-500">
              Sign up here
            </Link>
          </p>
        </div>
        <div className="mt-4">
          <Link to="/">
            <button
              type="button"
              className="w-full bg-orange-400 text-white p-2 rounded-md hover:bg-orange-500 focus:outline-none"
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;

