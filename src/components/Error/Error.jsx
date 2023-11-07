import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-white min-h-screen grid place-items-center ">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Oops...</h2>
        <p className="text-xl font-semibold py-2">Something went wrong</p>
        <Link to="/">
          <button className="btn bg-gradient-to-r w-full md:w-auto from-[#3144D7] to-[#801C98] font-semibold text-white border-none">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
