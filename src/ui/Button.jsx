import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "bg-yellow-500 uppercase font-semibold text-stone-600 py-3 px-4 inline-block tracking-wide rounded-full  hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:bg-yellow-400 focus:ring focus:ring-offset-2 focus:ring-yellow-300  disabled:cursor-not-allowed sm:px-6 sm:py-4 ";
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
