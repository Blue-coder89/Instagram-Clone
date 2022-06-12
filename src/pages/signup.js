import SignUpForm from "./signupComponents/signupform";
import Alternate from "../utilities/alternatePath";
import "../styles/signup.css";
import React from "react"
import { LOGIN } from "../constants/paths";
function Signup() {
    React.useEffect(() => {
        document.title = "SignUp - instagram";
      },[]);
  return (
    <>
      <div className="w-screen h-screen flex flex-row justify-center bg-[#fafafa] items-center">
        <div className="flex flex-col flex-wrap gap-y-[10px] justify-center w-screen formsm:w-[348px]">
        <SignUpForm/>
        <Alternate query = "Have an account? " solution = "Log In" path = {LOGIN}/>
        </div>
      </div>
    </>
  );
}

export default Signup;
