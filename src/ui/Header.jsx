import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="sm:font-pizza flex flex-col items-center justify-between border-b border-stone-300 bg-blue-500 px-4 uppercase text-yellow-400 sm:flex-row sm:bg-yellow-400 sm:px-6 sm:text-blue-500 sm:text-slate-800">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
