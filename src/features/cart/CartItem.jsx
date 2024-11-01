import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:justify-between sm:items-center">
      <p className="mb-1 sm:px-4 ">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <Button type="small">delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
