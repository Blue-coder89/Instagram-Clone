import LoginForm from "./loginComponents/loginform";
import Alternate from "../utilities/alternatePath";
import "../styles/login.css";
import React from "react"
import { SIGNUP } from "../constants/paths";

function Login() {
  React.useEffect(() => {
    document.title = "Login - instagram";
  },[]);

  return (
    <>
      <div className="w-screen h-screen flex flex-row justify-center bg-[#fafafa] items-center">
        <img
          src={process.env.PUBLIC_URL + "images/iphone-with-profile.jpg"}
          alt="I am an instagram login page"
          className="w-[0px] mb1:w-[525.4px] mb1:h-[736.8px] "
        ></img>
        <div className="flex flex-col gap-y-[10px] justify-center">
        <LoginForm/>
        <Alternate query = "Don't have an account? " solution = "Sign Up" path = {SIGNUP}/>
        </div>
      </div>
    </>
  );
}

export default Login;
