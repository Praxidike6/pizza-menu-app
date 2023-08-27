import { Link } from "react-router-dom";

function ButtonPopup({ children, disabled, to, type, toolTip }) {
  const className =
    "translate-colors inline-block rounded-full  bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide   text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none    focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const base =
    " group text-sm translate-colors inline-block rounded-full bg-blue-500 sm:bg-yellow-400 font-semibold uppercase tracking-wide  text-stone-100 sm:text-stone-800 duration-300 hover:bg-blue-400 sm:hover:bg-yellow-300 focus:outline-none    focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      " text-sm px-4 py-2.5 md:px-6 md:py-3.5 translate-colors inline-block rounded-full border-2 border-stone-300  font-semibold uppercase tracking-wide   text-stone-800 duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed ",
  };
  // if to not null then treat as a link
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  const style = toolTip !== "" ? "tooltip" : "";

  return (
    <div className={style} data-tip={toolTip}>
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    </div>
  );
}

export default ButtonPopup;
