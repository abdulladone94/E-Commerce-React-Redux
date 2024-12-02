import ProductSearch from "@/components/productSearch";
import ProductList from "../components/productList";
import { useSelector } from "react-redux";

const Home = () => {
  const products = useSelector((state) => state.cart.ferchProducts);
  const srarchQuery = useSelector((state) => state.cart.searchQuery);

  const productFilter = products.filter((product) =>
    product.name?.toLowerCase().includes(srarchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between m-2 md:mb-5 gap-2">
        <h1 className="text-2xl md:text-4xl">PRODUCTS LIST</h1>
        <ProductSearch />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {productFilter.map((product) => (
          <ProductList key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
