import React from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../../context/firebase";
import "../../styles/login.css";
import {HOME} from "../../constants/paths"
function LoginForm() {
  const [error,setError] = React.useState('');
  const [PasswordState, changePasswordState] = React.useState("password");
  const [Password, changePassword] = React.useState("");
  const [Email, changeEmail] = React.useState("");
  const [PasswordStyle, changePasswordStyle] = React.useState(
    "box-content max-w-[250px] h-[20px] pt-[9px] pb-[7px] pl-[8px] bg-[#EFEFEF] border-2 border-[#DBDBDB] rounded mb-[10px]"
  );
  const [SubmitButtonStyle, changeSubmitButtonStyle] = React.useState(
    {backgroundColor : "rgba(0, 149, 246,1)"}
  );
  const history = useNavigate();
  const {firebase} = React.useContext(FirebaseContext);
  let handleLogin  = async (e) =>{
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(Email,Password);
      history(HOME);
    } catch (error) {
      setError(error.message);
    }
  }
  
  let validCredentials = () => {
    const regex = /^[A-Za-z0-9](\w)+(\.(\w)+)?@(\w)+((\.(\w)+)+)$/;
    if(regex.test(Email) === false) return true;
    else if(Password.length < 6) return true;
    else return false;
  }
  
  return (
    <>
      <div className="bg-[#FFFFFF] border-2 border-[#DBDBDB] w-[348px] flex flex-col justify-center gap-y-[30px] items-center h-[450px] rounded">
        <img
          src={process.env.PUBLIC_URL + "images/logo.png"}
          alt="LOGO"
          className="scale-[0.9]"
        ></img>
        <form className="flex flex-col justify-center gap-y-[5px]" onSubmit={handleLogin}>
          <input
            type="text"
            id="name"
            placeholder="email"
            value={Email}
            onChange={(e) => {
              changeEmail(e.target.value);
            }}
            className="box-content max-w-[250px] h-[20px] pt-[9px] pb-[7px] pl-[8px] bg-[#EFEFEF] border-2 border-[#DBDBDB] focus:outline-none focus:border-[#0095F6] rounded"
          ></input>
          <div
            className={PasswordStyle}
            onFocus={() => {
              changePasswordStyle(
                "box-content max-w-[250px] h-[20px] pt-[9px] pb-[7px] pl-[8px] bg-[#EFEFEF] border-2 border-[#0095F6] rounded mb-[10px]"
              );
            }}
            onBlur={() => {
              changePasswordStyle(
                "box-content max-w-[250px] h-[20px] pt-[9px] pb-[7px] pl-[8px] bg-[#EFEFEF] border-2 border-[#DBDBDB] rounded mb-[10px]"
              );
            }}
          >
            <input
              type={PasswordState}
              id="password"
              placeholder="password"
              className="focus:outline-none bg-[#EFEFEF] max-w-[205px] mr-[4px]"
              value={Password}
              onChange={(e) => {
                changePassword(e.target.value);
              }}
            ></input>
            {Password.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  changePasswordState((prevState) => {
                    return prevState === "password" ? "text" : "password";
                  });
                }}
              >
                {PasswordState === "password"? "Show" : "Hide"}
              </button>
            )}
          </div>
          <button
            type="submit"
            className="box-content pl-[8px] text-white w-[253px] text-center h-[30px] rounded"
            style= {validCredentials()?{backgroundColor:"rgba(0, 149, 246,0.5)"} :SubmitButtonStyle}
            onMouseUp={() => {
              changeSubmitButtonStyle({backgroundColor:"rgba(0, 149, 246,1)"}); // mouse button release
            }}
            onMouseDown={() => {
              changeSubmitButtonStyle({backgroundColor:"rgba(0, 149, 246,0.8)"}); // mouse button pressed
            }}
            disabled = {validCredentials()? true:false}
          >
            Log In
          </button>
        </form>
        <div className="text-[red] text-[12px] text-center">{error}</div>
      </div>
    </>
  );
}

export default LoginForm;
