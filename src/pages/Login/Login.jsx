import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login3.png";
import Title from "../../components/Title/Title";
import Container from "../../components/ui/Container";
import useAuth from "./../../hooks/useAuth";
import { BsGithub, BsGoogle } from "react-icons/bs";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, googleSignIn, githubSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass);
    signInUser(email, pass)
      .then((result) => {
        if (result) toast.success("logged in successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("logged in successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("logged in successfully!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="hero min-h-screen">
      <Container>
        <div className="block md:flex flex-col-reverse md:flex-row gap-5 my-10 md:my-14">
          <div className="w-1/2 hidden md:block">
            <img className="w-full" src={loginImg} alt="Login" />
          </div>
          <div className="w-full px-4 md:px-8 shadow-md md:w-1/2 my-auto py-10 shadow-[#4f4370] ">
            <div className=" pb-2">
              <Title>Login</Title>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#9f99aa] font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-ed rounded-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#9f99aa] font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-ed rounded-sm"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text  text-[#9f99aa] font-semibold"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-[#3144D7] to-[#801C98] font-semibold text-white border-none">
                  Login
                </button>
              </div>
            </form>
            <p className="text-white pt-3">
              Don{`'`}t have an account?{" "}
              <Link to="/register " className="text-[#3144D7]">
                Register Now
              </Link>
            </p>

            <div className="flex items-center gap-2 mt-4">
              <div className="w-full h-[2px] bg-white"></div>
              <p className="text-center text-xl font-bold text-white">Or</p>
              <div className="w-full h-[2px] bg-white"></div>
            </div>

            <div className="mt-6 flex gap-5 justify-center flex-wrap">
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-gradient-to-r w-full md:w-auto from-[#3144D7] to-[#801C98] font-semibold text-white border-none"
              >
                <BsGoogle className="text-xl" /> Continue With Google
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-gradient-to-r w-full md:w-auto from-[#3144D7] to-[#801C98] font-semibold text-white border-none"
              >
                <BsGithub onClick={handleGithubSignIn} className="text-xl" />{" "}
                Continue With Github
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
