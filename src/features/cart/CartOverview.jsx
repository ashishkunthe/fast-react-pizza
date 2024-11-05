import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartPrice, getCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getCartQuantity);
  const totalCartPrice = useSelector(getCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="bg-stone-700 text-stone-100 uppercase p-4 sm:px-6 flex items-center justify-between">
      <p className="text-stone-200 font-semibold space-x-4 sm:space-x-6 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
