import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import userImg from "../../assets/user/user.png";
import useAuth from "../../hooks/useAuth";
import { AiOutlineClose } from "react-icons/ai";
import Container from "../ui/Container";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [profileIsTrue, setProfileIsTrue] = useState(false);
  const { user, logout } = useAuth();

  const handleTrue = () => {
    setIsTrue(!isTrue);
  };
  const handleProfile = () => {
    setProfileIsTrue(!profileIsTrue);
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

      {user ? (
        <>
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
              to="/all-submitted-assignments"
            >
              Submitted Assignment
            </NavLink>
          </li>
          <li className="border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold">
            <NavLink
              className="lg:text-white hover:text-[#9F99AA]"
              onClick={() => setIsTrue(false)}
              to="/my-assignment"
            >
              My Assignment
            </NavLink>
          </li>
          <li
            onClick={() => {
              logout();
              setIsTrue(false);
            }}
            className="border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold"
          >
            <a className="lg:text-white hover:text-[#9F99AA]">Logout</a>
          </li>
        </>
      ) : (
        <div className="flex lg:hidden flex-col gap-4 py-4">
          <NavLink
            className="lg:text-white hover:text-[#9F99AA]"
            onClick={() => setIsTrue(false)}
            to="/login"
          >
            <button
              className="
             bg-gradient-to-r from-[#3144D7] to-[#801C98] text-white border-none w-full
              py-4 text-lg lg:text-base font-semibold
            "
            >
              Login
            </button>
          </NavLink>
          <NavLink
            className="lg:text-white hover:text-[#9F99AA]"
            onClick={() => setIsTrue(false)}
            to="/register"
          >
            <button
              className="
            bg-gradient-to-r from-[#3144D7] to-[#801C98] text-white border-none w-full
           py-4 lg:text-lg text-base font-semibold
            "
            >
              Sing up
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
  return (
    <Container>
      <div className="navbar text-white  border-b border-[#2b1e4e] px-0">
        <div className="navbar-start flex-grow">
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
                isTrue ? " translate-x-0" : "-translate-x-[1060px]"
              } w-full h-full absolute z-30 top-0 left-0 flex lg:hidden transition-transform ease-in-out duration-1000  bg-[#00000065]`}
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
        <div className="navbar-end">
          {user ? (
            <div>
              <img
                onClick={handleProfile}
                src={user ? user?.photoURL : userImg}
                alt="userName"
                title={user && user?.displayName}
                className="w-9 h-9 rounded-full border-2 border-[#2c1d55] shadow-md hover:shadow-[#554481]"
              />
              <div
                className={`${
                  profileIsTrue ? "translate-x-0" : "translate-x-full"
                } w-full md:w-1/3 z-30 h-full absolute right-0 top-0 transition-transform ease-in-out duration-1000 `}
              >
                <div className=" bg-white text-[#10002B] w-full h-full py-16 px-5 relative">
                  <AiOutlineClose
                    onClick={() => setProfileIsTrue(false)}
                    className="absolute top-7 text-xl left-4 cursor-pointer"
                  />
                  <div className="flex items-center gap-2">
                    <img
                      src={user?.photoURL}
                      alt={user?.displayName}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="text-sm font-bold py-5">
                      <p>{user?.email}</p>
                      <p>{user?.displayName}</p>
                    </div>
                  </div>
                  <hr />
                  <ul className="py-5 space-y-4">
                    <li className="border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold">
                      <NavLink
                        className="text-[#221546]"
                        onClick={() => setProfileIsTrue(false)}
                        to="/my-profile"
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li className="border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold">
                      <NavLink
                        className="text-[#221546]"
                        onClick={() => setProfileIsTrue(false)}
                        to="/my-assignment"
                      >
                        My Assignment
                      </NavLink>
                    </li>
                    <li
                      onClick={() => {
                        logout();
                        setProfileIsTrue(false);
                      }}
                      className="border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold"
                    >
                      <a className="text-[#221546]">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden lg:block">
              <button
                className="
              btn bg-gradient-to-r from-[#3144D7] to-[#801C98] text-white border-none
              border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold
              "
              >
                <NavLink
                  className="lg:text-white hover:text-[#9F99AA]"
                  onClick={() => setIsTrue(false)}
                  to="/login"
                >
                  Login
                </NavLink>
              </button>
              <button
                className="
              btn bg-gradient-to-r from-[#3144D7] to-[#801C98] text-white border-none ml-5
              border-b-2 lg:border-none py-4 lg:py-0 text-lg lg:text-base font-semibold
              "
              >
                <NavLink
                  className="lg:text-white hover:text-[#9F99AA]"
                  onClick={() => setIsTrue(false)}
                  to="/register"
                >
                  Sing up
                </NavLink>
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
