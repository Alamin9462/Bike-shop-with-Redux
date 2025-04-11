/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

const Register = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {register, handleSubmit} = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
           <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Account</h2>
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 w-full px-4 py-2 border text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder="Your age"
              className="mt-1 w-full px-4 py-2 border text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a strong password"
              className="mt-1 w-full px-4 py-2 border text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Register
          </button>

          {/* Link to Login */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
        </form>
    );
};

export default Register;