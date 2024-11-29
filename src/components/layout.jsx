import CartTab from "./cartTab";
import Header from "./header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-blue-200">
      <main className="w-[1200px] max-w-full m-auto p-5">
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
};

export default Layout;
