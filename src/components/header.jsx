import { Link } from "react-router-dom";
import iconCart from "../assets/images/iconCart.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cartTabToggle } from "../store/cartSlice";

const Header = () => {
  const [totalCartItems, setTotlaCartItems] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);
  const loggedUser = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let totalItems = 0;
    cartItems.forEach((item) => {
      totalItems += item.itemQuentity;
    });
    setTotlaCartItems(totalItems);
  }, [cartItems]);

  const handleCartToggle = () => {
    dispatch(cartTabToggle());
  };

  return (
    <header className="flex justify-between items-center m-4">
      <Link
        to="/"
        className="w-24 flex items-center justify-center font-semibold outline outline-offset-1 rounded-md hover:bg-blue-300"
      >
        Home
      </Link>
      <div className="flex items-center">
        <Link
          to="/sign-in"
          className="w-24 text-center font-semibold mr-3 md:mr-8 outline outline-offset-1 md:px-5 rounded-md hover:bg-blue-300"
        >
          Logout
        </Link>
        <p className="hidden md:block font-semibold md:mr-8 md:px-5 rounded-md">
          {loggedUser.name}
        </p>
        <div
          className="w-10 h-10 rounded-full outline outline-offset-1 relative flex items-center justify-center hover:bg-blue-300"
          onClick={handleCartToggle}
        >
          <img src={iconCart} alt="cart" className="w-6" />
          <span className="absolute top-2/3 right-1/2 w-5 h-5 bg-red-500 flex items-center justify-center text-white rounded-full text-sm">
            {totalCartItems}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
