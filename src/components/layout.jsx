import { useSelector } from "react-redux";
import CartTab from "./cartTab";
import Header from "./header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const cartTabStatus = useSelector((store) => store.cart.cartTabStatus);
  return (
    <div className="bg-blue-200">
      <main
        className={`w-[1200px] max-w-full m-auto p-5 transition-transform duration-500 ${
          cartTabStatus === false ? "" : "md:-translate-x-56"
        }`}
      >
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
