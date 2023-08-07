import { IoPersonCircleSharp } from "react-icons/io5";
import { MdBrightness7 } from "react-icons/md";
import Sidebar from "./Sidebar";
import Search from "./Search";

function Navbar() {
  return (
    <div className=" bg-base-100 shadow-lg overflow-hidden">
      <div className="navbar md:px-12">
        <div className=" navbar-start">
          {/* Menubar */}
          <div className="flex">
            <Sidebar />
            {/* logo */}
            <a
              href="/"
              className="btn btn-ghost normal-case text-xl hidden md:flex text-red-500"
            >
              Filmaxy
            </a>
          </div>
        </div>

        <div className="form-control navbar-center">
          <Search />
        </div>

        <div className="navbar-end md:gap-4">
          <button className="btn btn-ghost">
            <MdBrightness7 className="w-7 h-7" />
          </button>
          <div className="flex items-center md:gap-3 btn btn-ghost">
            <h2 className="hidden md:flex">Login</h2>
            <IoPersonCircleSharp className="h-7 w-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
