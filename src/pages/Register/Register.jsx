import Title from "../../components/Title/Title";
import loginImg from "../../assets/images/login3.png";
import Container from "../../components/ui/Container";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const pass = form.password.value;
    console.log(email, pass, name, photo);
  };
  return (
    <div className="hero min-h-screen">
      <Container>
        <div className="block md:flex flex-col-reverse md:flex-row gap-5 my-10 md:my-14">
          <div className="w-1/2 hidden md:block">
            <img className="w-full" src={loginImg} alt="Login" />
          </div>
          <div className="w-full px-4 md:px-7 shadow-md md:w-1/2 my-auto py-10 shadow-[#4f4370] ">
            <div className=" pb-2">
              <Title>Login</Title>
            </div>
            <form className=" ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#9f99aa] font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="photo url"
                  name="photo"
                  className="input input-ed rounded-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-[#9f99aa] font-semibold">
                    Full Name
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="full name"
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
