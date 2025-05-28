import { Link } from "react-router";

function Navbar() {
  return (
    <div className="">
      <div className="p-3 bg-green-900 text-white flex justify-around items-center">
        <img className="w-10  rounded-xl" src="react.svg" alt="" />
        <ul className="hidden lg:flex gap-5">
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"login"}>Login</Link>
          </li>
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"signup"}>Signup</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
