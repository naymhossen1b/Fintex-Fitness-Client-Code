import { Link, NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";
import logo from "../../../public/assets/Logo/fitness.png";

const Header = () => {
  return (
    <div>
      <div className=" font-josefin w-full md:w-11/12 mx-auto text-white md:fixed md:z-10 bg-green-400 bg-opacity-70 shadow-sm">
        <div className="py- border-b-[1px]">
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            <div className="flex md:gap-56 items-center justify-between">
              <div className="flex items-center">
                <Link to="/">
                  <img className="w-20 rounded-full" src={logo} alt="" />
                </Link>
                <h1 className="text-3xl font-bold">Fitnex</h1>
              </div>
              <div className="">
                <ul className="hidden md:flex items-center gap-4 font-bold">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-xl text-red-500" : ""
                      }
                    >
                      <h1 className="md:font-bold">Home</h1>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/gallery"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-xl text-red-500" : ""
                      }
                    >
                      <h1 className="font-bold">Gallery</h1>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/trainer"
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold text-xl text-red-500" : ""
                      }
                    >
                      <h1 className="font-bold">Trainer</h1>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/classes"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "font-bold text-xl text-red-500" : ""
                   }
                    >
                      <h1 className="font-bold">Classes</h1>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/forum"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "font-bold text-xl text-red-500" : ""
                   }
                    >
                      <h1 className="font-bold">Forum</h1>
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/challenges"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "font-bold text-xl text-red-500" : ""
                   }
                    >
                      <h1 className="font-bold">Challenges</h1>
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
            <MenuDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
