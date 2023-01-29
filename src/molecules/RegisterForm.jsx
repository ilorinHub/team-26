import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import AuthContext from "../context/AuthContext";

const RegisterForm = ({ form }) => {
  const navigate = useNavigate()

  const {signup , authSuccess , setAuthSuccess} = useContext(AuthContext)
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    setAuthSuccess(false)
  },[])

  const handleSubmit = () => {
    signup(formData)
    // try {
    //   signin(username, password)
    // } catch (error) {
    //   console.log(error)
    // }
  };
  
  if(authSuccess){
    navigate("/dashboard/admin/memos")
  }

  return (
    <div className="register-form">
      <div className="text-center text-xl">
        <p>
          Create a <span className="text-lg uppercase text-green">{form}</span> account
        </p>
      </div>

      <div className="form mt-5">
        <form className="flex flex-col gap-4">
          {form === "school" && (
            <div className="input">
              <label htmlFor="schoolName">School name</label>
              <input
                type="text"
                name="schoolName"
                placeholder="ABC Grammar School"
                onChange={onChange}
                required
              />
            </div>
          )}

          {form != "school" && (
            <div className="input">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="John Doe"
                onChange={onChange}
                required
              />
            </div>
          )}
           {form != "school" && (
            <div className="input">
              <label htmlFor="last_name">last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="John Doe"
                onChange={onChange}
                required
              />
            </div>
          )}

          <div className="input">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={onChange}
              required
            />
          </div>

          {form === "teacher" && (
            <div className="input">
              <label htmlFor="schoolName">School name</label>
              <input
                type="text"
                name="schoolName"
                placeholder="ABC Grammar School"
                onChange={onChange}
                required
              />
            </div>
          )}

          {form === "parent" && (
            <div className="input">
              <label htmlFor="schoolName">School name</label>
              <input
                type="text"
                name="schoolName"
                placeholder="ABC Grammar School"
                onChange={onChange}
                required
              />
            </div>
          )}

          {form != "parent" && (
            <div className="input">
              <label htmlFor="username"> username</label>
              <input
                type="text"
                name="username"
                placeholder="KWME/XYZ/123"
                onChange={onChange}
                required
              />
            </div>
          )}

          {form === "teacher" && (
            <div className="input">
              <label htmlFor="class">Class</label>
              <input
                type="text"
                name="class"
                placeholder="Basic 5"
                onChange={onChange}
                required
              />
            </div>
          )}
          <div className="input">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              placeholder="1, Ipata Junction, Challenge, Ilorin"
              onChange={onChange}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="****"
              onChange={onChange}
              required
            />
          </div>

          <div className="input">
            <label htmlFor="password2">Confirm password</label>
            <input
              type="password"
              name="password2"
              placeholder="****"
              onChange={onChange}
              required
            />
          </div>
        </form>
        <div className="mt-6 mb-10" onClick={handleSubmit}>
          <Button
            bg="text-white"
            text="bg-green"
            info="Proceed"
            padding="py-2"
            font="text-base"
            width="w-full"
          />
        </div>
      </div>
      <p className="text-center">
        Already have an account?
        <Link to="/login" className="text-blue-500">
          Login instead
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
