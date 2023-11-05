import Title from "../../components/Title/Title";
import loginImg from "../../assets/images/login3.png";
import Container from "../../components/ui/Container";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BsGoogle, BsGithub } from "react-icons/bs";

const Register = () => {
  const { createUser, googleSignIn, githubSignIn, updateUserProfile } =
    useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const pass = form.password.value;
    const userProfile = {
      displayName: name,
      photoURL: photo || "https://i.ibb.co/F3bkbtT/user.png",
    };
    console.log(email, pass, name, photo);

    if (pass.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(pass)) {
      toast.error("Password must have at least a capital letter.");
      return;
    }

    if (!/[!#$%&? "]/.test(pass)) {
      toast.error(
        "Don't have a special character. Example: !, #, $, %, & or ?"
      );
      return;
    }

    createUser(email, pass)
      .then((result) => {
        if (result.user) {
          updateUserProfile(result.user, userProfile);
        }
        toast.success("User created successfully!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("User created successfully!");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("User created successfully!");
        navigate("/");
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
              <Title>Register Now</Title>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#9f99aa] font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo"
                  className="input input-ed rounded-sm"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#9f99aa] font-semibold">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="full name"
                  name="name"
                  className="input input-ed rounded-sm"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-[#3144D7] to-[#801C98] font-semibold text-white border-none">
                  Sign up
                </button>
              </div>
            </form>
            <p className="text-white pt-3">
              Have already an account?{" "}
              <Link to="/login " className="text-[#3144D7]">
                Login
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
                onClick={handleGithubSignIn}
                className="btn bg-gradient-to-r w-full md:w-auto from-[#3144D7] to-[#801C98] font-semibold text-white border-none"
              >
                <BsGithub className="text-xl" /> Continue With Github
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
