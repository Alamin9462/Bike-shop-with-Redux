/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hook";
import { verifyToken } from "../utils/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });

      if (res.data.needsPasswordChange) {
        navigate(`/change-password`);
      } else {
        if (user.role === "admin") {
          navigate("/admin");
        } else if (user.role === "customer") {
          navigate("/");
        }
      }
    } catch (err:unknown) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };


  const fillAdminCredentials = () => {
    setValue("email", "admin@example.com");
    setValue("password", "admin123");
  };

  const fillUserCredentials = () => {
    setValue("email", "porosh@example.com");
    setValue("password", "porosh123");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

       
        <div className="flex justify-between mb-4">
          <button
            onClick={fillAdminCredentials}
            type="button"
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Admin Credential
          </button>
          <button
            onClick={fillUserCredentials}
            type="button"
            className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            User Credential
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 text-gray-500 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 text-gray-500 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Sign In
          </button>

          <div className="text-sm text-center mt-4 text-gray-500">
            Don’t have an account?{" "}
            <a href="/register" className="text-indigo-600 hover:underline">
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
