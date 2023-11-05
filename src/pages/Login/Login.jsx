import loginImg from "../../assets/images/login3.png";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col md:flex-row">
        <div className="flex-1">
          <img src={loginImg} alt="Login" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl flex-1">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
