import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userImg from "../../assets/user/user.png";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleTrue = () => {
    setIsTrue(!isTrue);
  };

  const navLinks = (
    <>
      <li className="border-b-2 lg:border-none py-4 lg:py-0 text-lg font-semibold">
        <NavLink
          className="lg:text-white hover:text-[#9F99AA]"
          onClick={() => setIsTrue(false)}
          to="/assignments"
        >
          Assignments
        </NavLink>
      </li>
      <li className="border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold">
        <NavLink
          className="lg:text-white hover:text-[#9F99AA]"
          onClick={() => setIsTrue(false)}
          to="/create-assignment"
        >
          Create Assignment
        </NavLink>
      </li>
      <li className="border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold">
        <NavLink
          className="lg:text-white hover:text-[#9F99AA]"
          onClick={() => setIsTrue(false)}
          to="/submitted-assignment"
        >
          Submitted Assignment
        </NavLink>
      </li>
      <li className="border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold">
        <NavLink
          className="lg:text-white hover:text-[#9F99AA]"
          onClick={() => setIsTrue(false)}
          to="/My-assignment"
        >
          My Assignment
        </NavLink>
      </li>
      <li className="border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold">
        <NavLink
          className="lg:text-white hover:text-[#9F99AA]"
          onClick={() => setIsTrue(false)}
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li className="border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold">
        <NavLink
          className="lg:text-white hover:text-[#9F99AA]"
          onClick={() => setIsTrue(false)}
          to="/register"
        >
          Sing up
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar text-white overflow-hidden border-b border-[#2b1e4e]">
      <div className="navbar-start">
        <div>
          <label
            onClick={handleTrue}
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div
            className={`${
              isTrue ? "left-0 translate-x-0" : "-translate-x-[1060px]"
            } w-full h-full absolute top-0 flex lg:hidden transition-transform ease-in-out duration-1000  bg-[#00000065]`}
          >
            <ul className="w-2/3 md:w-1/2 bg-white text-[#10002B] h-full py-16 px-5">
              {navLinks}
            </ul>
            <div
              onClick={() => setIsTrue(false)}
              className="w-1/3 md:w-1/2 h-full"
            ></div>
          </div>
        </div>
        <Link to="/" className="normal-case text-xl cursor-pointer">
          Let{`'`}s Study
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        <img
          src={userImg}
          alt="userName"
          title="User Name"
          className="w-12 h-12 rounded-full border-2 border-[#2c1d55] shadow-md hover:shadow-[#554481]"
        />
      </div>
    </div>
  );
};

export default Navbar;
