import "./signUp.css";
import iconGG from "../../assets/images/icongg.png";
import iconOffice from "../../assets/images/imageoffice.png";
import { useEffect, useState } from "react";
import GoogleLogin, { useGoogleLogin } from "react-google-login";

export default function SignUp() {
  const [isLogin, setIslogin] = useState(false);
  const [isShowRightClick, setIsShowRightClick] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const clientId =
    "539218133131-l26i94qkb26s6t78nk6nu1v0n1sjnns0.apps.googleusercontent.com";

  const handleClick = () => {
    setIsShowRightClick(false);
  };
  const styleContentRightClick = () => {
    return {
      width: "60px",
      height: "80px",
      backgroundColor: "red",
      position: "absolute",
      top: y,
      left: x,
      display: isShowRightClick ? "block" : "none",
    };
  };
  const rightClick = (e) => {
    e.preventDefault();
    setX(e.pageX);
    setY(e.pageY);
    setIsShowRightClick(true);
  };

  const onSuccess = (res) => {
    setIslogin(true);
    console.log("Login Success: currentUser:", res);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍`
    );
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Login failed`);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // redirectUri: "http://localhost:3000/challenges",
    // responseType: "code",
    // ux_mode: "redirect",
    prompt: "consent",
  });

  return (
    <>
      <div className="card">
        <div className="card-container">
          <div className="card-title">SignUp</div>
          <div className="card-description">
            Already have Hitseries Cloud account? <a href="/">Log in here.</a>
          </div>
          <div className="card-content">
            <div className="content-row1">
              <div className="f-name">
                <label>First Name</label>
                <input type="text" placeholder="First name" />
              </div>
              <div className="l-name">
                <label>Last Name</label>
                <input type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="content-row2">
              <label>Email address</label>
              <input type="text" placeholder="Enter your work email" />
            </div>
            <div className="content-row2">
              <label>Login ID</label>
              <input type="text" placeholder="Enter at leater 8 charactor" />
            </div>
            <div className="content-row2">
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="content-row2">
              <label>Confirm password</label>
              <input type="password" placeholder="Confirm password" />
            </div>
            <div className="content-row3">
              <div className="suggest">
                <span className="content-suggest">● 8 charactors minimum</span>
                <span className="content-suggest">
                  ● One uppercase character
                </span>
              </div>
              <div className="suggest">
                <span className="content-suggest">
                  ● One lowercase character
                </span>
                <span className="content-suggest">● One number or symbol</span>
              </div>
            </div>
            <div className="content-row4">
              Your data will be stored in the <b>United States</b> data center.
            </div>
            <div className="content-row5">
              <button className="button-signup">SIGN UP</button>
            </div>
            <div className="content-row6">
              By clicking “SIGN UP” you confirm that you accept the Terms and
              Use and the Privacy Policy.
            </div>
            <div className="content-button">
              <div className="button-gg" onClick={() => signIn()}>
                <img src={iconGG} alt="icon" />
                Sign Up with Google
              </div>
            </div>
            <div className="content-button">
              <div
                className="button-office"
                onContextMenu={(e) => rightClick(e)}
              >
                <img src={iconOffice} alt="icon" />
                Sign Up with office 365
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styleContentRightClick()}>content right</div>
    </>
  );
}
