import LogoIcon from "../../assets/icons/LogoIcon";
import Input from "../../components/input/Input";
import EmailIcon from "../../assets/icons/EmailIcon";
import LockIcon from "../../assets/icons/LockIcon";
import Button from "../../components/button/Button";
import GoogleIcon from "../../assets/icons/GoogleIcon";

export default function LoginForm() {
  return (
    <form className="login-form" role="form">
      <LogoIcon className="login-form__logo" />
      <div className="login-form__info">
        <p className="login-form__info-welcome">Welcome Back</p>
        <p className="login-form__info-signup">
          Don’t have an account yet?
          <a href="#" className="login-form__info-signup-link">
            Sign Up
          </a>
        </p>
      </div>
      <Input type="text" placeholder="Email Address" icon={<EmailIcon />} />
      <Input type="password" placeholder="Password" icon={<LockIcon />} />
      <Button className="btn-primary" label="Login" width={100} />
      <Button
        className="btn-outline"
        label="Authorize with Google"
        width={100}
        icon={<GoogleIcon />}
      />
    </form>
  );
}
