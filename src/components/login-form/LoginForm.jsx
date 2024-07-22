import { Link } from "react-router-dom";
import LogoIcon from "../../assets/icons/LogoIcon";
import Input from "../../components/input/Input";
import EmailIcon from "../../assets/icons/EmailIcon";
import LockIcon from "../../assets/icons/LockIcon";
import Button from "../../components/button/Button";
import GoogleIcon from "../../assets/icons/GoogleIcon";

export default function LoginForm({ setIsLogin, isLogin }) {
  return (
    <form className="login-form" role="form">
      <LogoIcon className="login-form__logo" />
      <div className="login-form__info-wrapper">
        <p className="login-form__welcome">Welcome Back</p>
        <p className="login-form__signup">
          Don’t have an account yet?
          <a href="#" className="login-form__link">
            Sign Up
          </a>
        </p>
      </div>
      <Input type="text" placeholder="Email Address" icon={<EmailIcon />} />
      <Input type="password" placeholder="Password" icon={<LockIcon />} />
      <Link
        to={"/dashboard"}
        style={{ width: "100%" }}
        onClick={() => setIsLogin(!isLogin)}
      >
        <Button
          className="btn-primary"
          label="Login"
          width={100}
          onClick={() => setIsLogin(!isLogin)}
        />
      </Link>
      <div className="login-form__separator">or</div>
      <Link
        to={"/dashboard"}
        style={{ width: "100%" }}
        onClick={() => setIsLogin(!isLogin)}
      >
        <Button
          className="btn-outline"
          label="Authorize with Google"
          width={100}
          icon={<GoogleIcon />}
        />
      </Link>
    </form>
  );
}
