import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "bg-yellow-500 uppercase font-semibold text-stone-600 inline-block tracking-wide rounded-full  hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:bg-yellow-400 focus:ring focus:ring-offset-2 focus:ring-yellow-300  disabled:cursor-not-allowed  ";

  const styles = {
    primary: base + "px-4 py-3 sm:px-6 sm:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
