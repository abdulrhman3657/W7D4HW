import { Link } from "react-router";
import { useState } from "react";

function Navbar() {
  const [mbileMenue, setMobileMenue] = useState(false);

  console.log(mbileMenue);

  return (
    <div className="">
      <div className="p-3 bg-green-900 text-white flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between lg:justify-around items-center">
        <img className="w-10  rounded-xl" src="react.svg" alt="" />
        <ul className="hidden lg:flex gap-5">
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"login"}>Login</Link>
          </li>
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"signup"}>Sign up</Link>
          </li>
        </ul>
        <ul className="lg:hidden text-center">
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"login"}>Login</Link>
          </li>
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"signup"}>Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
