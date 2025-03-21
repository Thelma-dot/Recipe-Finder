import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm'; // Assuming you have a SignupForm component

const Signup = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/signup-bg.jpg')" }}>
      <div className="bg-black bg-opacity-70 p-10 rounded-lg max-w-md w-full text-white">
        <h2 className="text-3xl mb-6 text-center">Sign Up for DishCover</h2>
        <SignupForm />
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
