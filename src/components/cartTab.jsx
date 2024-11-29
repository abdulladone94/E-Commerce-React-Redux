import { useDispatch, useSelector } from "react-redux";
import CartItem from "./cartItem";
import { cartTabToggle } from "../store/cartSlice";

const CartTab = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartStatusTab = useSelector((store) => store.cart.cartTabStatus);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleCloss = () => {
    dispatch(cartTabToggle());
  };

  return (
    <div
      className={`fixed top-0 right-0 w-72  xl:w-96 bg-gray-700 h-full grid grid-rows-[60px_1fr_60px] transition-transform duration-500 ${
        cartStatusTab === false ? "translate-x-full" : ""
      }`}
    >
      <h1 className="p-2 text-2xl text-white">Shipping Cart</h1>
      <div>
        {cartItems.map((item, key) => (
          <CartItem key={key} item={item} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <button
          className="md:text-2xl text-xl text-white bg-black"
          onClick={handleCloss}
        >
          CLOSE
        </button>
        <button className="md:text-2xl text-xl text-white bg-amber-600">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTab;
