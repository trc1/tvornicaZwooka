import LoginDecoration from "../../assets/login-elements/LoginDecoration";
import ZwookDashboard from "../../assets/login-elements/ZwookDashboard";
import LoginForm from "../../components/login-form/LoginForm";

export default function Login({ setIsLogin, isLogin }) {
  return (
    <div className="login">
      <div className="login__card">
        <LoginForm setIsLogin={setIsLogin} isLogin={isLogin} />
      </div>
      <div className="login__image">
        <LoginDecoration className="login__image-decoration" />
        <LoginDecoration className="login__image-decoration" />
        <ZwookDashboard className="login__image-dashboard" />
      </div>
    </div>
  );
}
