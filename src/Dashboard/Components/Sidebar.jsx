import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import LogoImg from "./logoImg";
import MenuItem from "./MenuItem";
// import ToggleBtn from "./ToggleBtn";
import UseRole from "../../Hooks/Roles/UseRole";
import TrainerMenus from "../Trainer/TrainerMenus";
import MemberMenus from "../Members/MemberMenus";
import AdminMenus from "../Admin/AdminMenus";

const Sidebar = () => {
  // const [ setToggle] = useState(false);
  const [isActive, setActive] = useState(false);

  const role = UseRole();
  console.log(role);

  //   For guest/host menu item toggle button
  // const toggleHandler = (event) => {
  //   setToggle(event.target.checked);
  // };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-green-300 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <LogoImg />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
              <LogoImg />
            </div>
            <div className=" bg-red-100 shadow-xl px-1 py-1 rounded-t-full">
            <h2 className="font-bold text-xl text-center text-green-500">Fitnex - Fitness</h2>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* If a user is Trainer */}
            {/* <ToggleBtn toggleHandler={toggleHandler} /> */}

            {/* Member Menus */}
            <nav>
              { role === 'member' && <MemberMenus /> }
            </nav>
            {/* Trainer Menus */}
            <nav>
              { role === 'trainer' && <TrainerMenus /> }
            </nav>
            {/* Admin Menus */}
            <nav>
              { role === 'admin' && <AdminMenus />}
            </nav>

          </div>
        </div>

        <div>
          <hr />

          <MenuItem icon={FaHome} label="Home" address="/" />
          <MenuItem icon={FcSettings} label="Profile" address="/dashboard/profile" />
          <button className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;