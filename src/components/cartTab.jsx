import { useSelector } from "react-redux";
import CartItem from "./cartItem";

const CartTab = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="fixed top-0 right-0 w-96 bg-gray-700 h-full grid grid-rows-[60px_1fr_60px]">
      <h1 className="p-2 text-2xl text-white">Shipping Cart</h1>
      <div>
        {cartItems.map((item, key) => (
          <CartItem key={key} item={item} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <button className="text-2xl text-white bg-black">CLOSE</button>
        <button className="text-2xl text-white bg-amber-600">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTab;
