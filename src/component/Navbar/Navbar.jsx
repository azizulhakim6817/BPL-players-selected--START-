import { CircleDollarSign } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = ({ availableBalance }) => {
  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="w-14 h-12" src={logo} alt="" />
          </a>
        </div>
        <div className="px-4 py-1 flex gap-2  ">
          <span className="font-semibold">{availableBalance}</span>
          <span className="font-semibold text-orange-400">Coin</span>
          <span>
            <CircleDollarSign className="w-full bg-yellow-500 text-white rounded-full" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
