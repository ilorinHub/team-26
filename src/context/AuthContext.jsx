import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [isLoading , setIsLoading] = useState(false)
  const [isError , setIsError] = useState(false)
  const [authSuccess , setAuthSuccess] = useState(false)


  const signin = async (username, password) => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN'
    };

    const data = {username, password};

    try {
      const res = await axios.post(`https://huangdi.pythonanywhere.com/api/login/`,data , headers)
      setAuthSuccess(true)
      localStorage.setItem("token" , JSON.stringify(res.data))
      toast('successfully login in')
    } catch (error) {
      console.log(error)

      setAuthSuccess(false)
      setAuthSuccess(false)
      toast(error.response.data?.username[0])
      toast(error.response.data?.password[0])
    }
  }
  
  const signup = async (formData) => {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN'
    };

    try {
      const res = await axios.post(`https://huangdi.pythonanywhere.com/api/signup/`, formData , headers)
      alert('successfully sign up')
      await signin(formData.username , formData.password)
    } catch (error) {
      console.log(error)
      setAuthSuccess(false)
      alert('there is an error try again')

    }
  }

    
  const createMessage = async (formData) => {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_TOKEN'
    };

    try {
      const res = await axios.post(`http://huangdi.pythonanywhere.com/api/letters/`, formData , headers)
      alert('message successfully created')
    } catch (error) {
      setAuthSuccess(false)
      alert('there is an error try again')

    }
  }

  return (
    <AuthContext.Provider value={{
      isLoading,
      isError,
      signup,
      signin,
      setIsLoading,
      setIsError,
      setAuthSuccess,
      authSuccess,
      createMessage
    }}>
      {
        children
      }
    </AuthContext.Provider>
  )
}

export default AuthContext