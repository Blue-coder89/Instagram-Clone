import React from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../../context/firebase";
import "../../styles/signup.css";
import { HOME } from "../../constants/paths";
import { doesUsernameexists } from "../../services/firebase";
function SignUpForm() {
  const [error, setError] = React.useState("");
  const [PasswordState, changePasswordState] = React.useState("password");
  const [Password, changePassword] = React.useState("");
  const [Email, changeEmail] = React.useState("");
  const [Username, changeUsername] = React.useState("");
  const [Realname, changeRealname] = React.useState("");
  const [PasswordStyle, changePasswordStyle] = React.useState(
    "box-content w-[250px] h-[20px] pt-[9px] pb-[7px] pl-[8px] bg-[#EFEFEF] border-2 border-[#DBDBDB] rounded mb-[10px]"
  );
  const [SubmitButtonStyle, changeSubmitButtonStyle] = React.useState({
    backgroundColor: "rgba(0, 149, 246,1)",
  });
  const history = useNavigate();
  const { firebase } = React.useContext(FirebaseContext);
  let handleSignUp = async (e) => {
    e.preventDefault();
    const condition = await doesUsernameexists(Username); // it return an array having all elements true if the username already exists
    console.log(condition);
    if (condition.length === 0) {
      setError("");
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(Email, Password);
        await createdUserResult.user.updateProfile({ displayName: Username });
        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          username: Username.toLowerCase(),
          Realname,
          emailAddress : Email.toLowerCase(),
          following : [],
          dateCreated : Date.now()
        });
        history(HOME);
      } catch(error) {
        setError(error.message);
      }
    } // obvious
    else {
      setError("Username already taken");
    }
  };

  let validCredentials = () => {
    const regex = /^[A-Za-z0-9](\w)+(\.(\w)+)?@(\w)+((\.(\w)+)+)$/;
    if (regex.test(Email) === false) return true;
    else if (Password.length < 6) return true;
    else return false;
  };
  React.useEffect(() => {
    document.title = "Signup - instagram";
  }, []);
  return (
    <>
      <div className="bg-[#FFFFFF] border-2 border-[#DBDBDB] w-screen formsm:w-[348px] flex flex-col flex-wrap justify-center gap-y-[20px] items-center h-[460px] rounded pt-[25px]">
        <img
          src={process.env.PUBLIC_URL + "images/logo.png"}
          alt="LOGO"
        ></img>
         <div className="text-[#8E8E8E] font-bold text-[17px] text-center w-[250px]">Sign Up to see photos and videos from your friend</div>
        <form
          className="flex flex-col justify-center gap-y-[5px]"
          onSubmit={handleSignUp}
        >
          <input
            type="text"
            id="username"
            placeholder="username"
            value={Username}
            onChange={(e) => {
              changeUsername(e.target.value);
            }}
            className="box-content w-[250px] h-[20px] pt-[9px] pb-[7px] pl-[8px] bg-[#EFEFEF] border-2 border-[#DBDBDB] focus:outline-none focus:border-[#0095F6] rounded"
          ></input>
          <input
            type="text"
            id="fullname"
            placeholder="fullname"
            value={Realname}
            onChange={(e) => {
              changeRealname(e.target.value);
            }}
            className="box-content w-[250px] h-[20px] pt-[9px] pb-[7px] pl-[8px] bg-[#EFEFEF] border-2 border-[#DBDBDB] focus:outline-none focus:border-[#0095F6] rounded"
          ></input>
          <input
            type="text"
            id="name"
            placeholder="email"
            value={Email}
            onChange={(e) => {
              changeEmail(e.target.value);
            }}
            className="box-content w-[250px] h-[20px] pt-[9px] pb-[7px] pl-[8px] bg-[#EFEFEF] border-2 border-[#DBDBDB] focus:outline-none focus:border-[#0095F6] rounded"
          ></input>
          <div
            className={PasswordStyle}
            onFocus={() => {
              changePasswordStyle(
                "box-content w-[250px] h-[20px] pt-[9px] pb-[7px] pl-[8px] bg-[#EFEFEF] border-2 border-[#0095F6] rounded mb-[10px]"
              );
            }}
            onBlur={() => {
              changePasswordStyle(
                "box-content w-[250px] h-[20px] pt-[9px] pb-[7px] pl-[8px] bg-[#EFEFEF] border-2 border-[#DBDBDB] rounded mb-[10px]"
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
                {PasswordState === "password" ? "Show" : "Hide"}
              </button>
            )}
          </div>
          <button
            type="submit"
            className="box-content pl-[8px] text-white w-[253px] text-center h-[30px] rounded"
            style={
              validCredentials()
                ? { backgroundColor: "rgba(0, 149, 246,0.5)" }
                : SubmitButtonStyle
            }
            onMouseUp={() => {
              changeSubmitButtonStyle({
                backgroundColor: "rgba(0, 149, 246,1)",
              }); // mouse button release
            }}
            onMouseDown={() => {
              changeSubmitButtonStyle({
                backgroundColor: "rgba(0, 149, 246,0.8)",
              }); // mouse button pressed
            }}
            disabled={validCredentials() ? true : false}
          >
            Sign Up
          </button>
        </form>
        <div className="text-[red] text-[12px] text-center">{error}</div>
      </div>
    </>
  );
}

export default SignUpForm;
