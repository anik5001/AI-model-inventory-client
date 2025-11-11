import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const { googleWithSigninFun, signInUserFuc, setUser } = use(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLoginUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signInUserFuc(email, password)
      .then(() => {
        toast.success("Successful login");

        navigate(location?.state || "/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSign = () => {
    googleWithSigninFun()
      .then((result) => {
        // console.log(result);
        setUser(result.user);
        toast.success("Successful login");
        navigate(location?.state || "/");
      })
      .catch((e) => {
        console.log(e.code);
        toast.error(e.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-2xl font-bold text-center">
                Login to AI Model Inventory Manager
              </h1>
              <form onSubmit={handleLoginUser}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                    required
                  />

                  <label className="label">Password</label>
                  <div className=" relative">
                    <input
                      name="password"
                      type={showPass ? "text" : "password"}
                      className="input"
                      placeholder="Password"
                      required
                    />
                    <span
                      className="text-xl absolute top-[10px] right-[90px] cursor-pointer z-50"
                      onClick={() => setShowPass(!showPass)}
                    >
                      {showPass ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <div className="flex items-center  justify-between">
                <p className="border-b"></p>
                <p className="text-center">OR</p>
                <p className="border-b"></p>
              </div>
              {/* Google */}
              <button
                onClick={handleGoogleSign}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="font-bold text-[18px]">
                Don't have account?{" "}
                <Link
                  to="/auth-register"
                  className="link link-hover text-blue-500"
                >
                  register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
