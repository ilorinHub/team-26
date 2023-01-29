import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
function TeacherLogin() {
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const { signin,authSuccess,setAuthSuccess } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    try {
      signin(username, password);
      if (authSuccess) {
        navigate("/dashboard/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (authSuccess) {
    navigate("/dashboard/admin/memos");
  }

  useEffect(() => {
    setAuthSuccess(false);
  }, []);

  return (
    <div className="flex flex-col items-center text-left  ">
      <form className="flex flex-col w-full" onSubmit={handleLogin}>
        <h1 className="text-center text-xl  mb-6 ">Welcome Back!</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={({ target }) => setUserName(target.value)}
            type="text"
            placeholder="example@gmail.com"
            className="border border-green mt-1 mb-6 block w-full px-6 py-2"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            onChange={({ target }) => setpassword(target.value)}
            type="password"
            placeholder="****"
            className="border border-green mt-1 mb-6 block w-full px-6 py-2"
          />
        </div>
        <button className="text-white bg-green w-full text-center p-2">
          Log In
        </button>
        <Link>
          <div
            className="text-center mt-6 text-[#63A8FA]
"
          >
            Reset Password
          </div>
        </Link>
      </form>
    </div>
  );
}

export default TeacherLogin;
