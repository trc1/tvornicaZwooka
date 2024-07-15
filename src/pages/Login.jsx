import LoginDecoration from "../assets/login-elements/LoginDecoration";
import ZwookDashboard from "../assets/login-elements/ZwookDashboard";
import LogoIcon from "../assets/icons/LogoIcon";
import Input from "../components/input/Input";
import EmailIcon from "../assets/icons/EmailIcon";
import LockIcon from "../assets/icons/LockIcon";
import Button from "../components/button/Button";
import GoogleIcon from "../assets/icons/GoogleIcon";

export default function Login() {
  return (
    <div className="login">
      <div className="login__card">
        <form className="login__card-form" role="form">
          <LogoIcon className="login__card-form-logo" />
          <div className="login__card-form-info">
            <p className="login__card-form-info-welcome">Welcome Back</p>
            <p className="login__card-form-info-signup">
              Don’t have an account yet?
              <a href="#" className="login__card-form-info-signup-link">
                Sign Up
              </a>
            </p>
          </div>
          <Input type="text" placeholder="Email Address" icon={<EmailIcon />} />
          <Input
            type="password"
            placeholder="Email Address"
            icon={<LockIcon />}
          />
          <Button className="btn-primary" label="Login" width={100} />
          <Button
            className="btn-outline"
            label="Authorize with Google"
            width={100}
            icon={<GoogleIcon />}
          />
        </form>
      </div>
      <div className="login__image">
        <LoginDecoration className="login__image-decoration" />
        <LoginDecoration className="login__image-decoration" />
        <ZwookDashboard className="login__image-dashboard" />
      </div>
    </div>
  );
}
