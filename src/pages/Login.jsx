import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm'; // Assuming you already have a form component

const Login = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/login-bg.jpg')" }}>
      <div className="bg-black bg-opacity-70 p-10 rounded-lg max-w-md w-full text-white">
        <h2 className="text-3xl mb-6 text-center">Login to DishCover</h2>
        <LoginForm />
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
