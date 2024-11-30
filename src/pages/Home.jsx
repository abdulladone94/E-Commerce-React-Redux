import ProductSearch from "@/components/productSearch";
import { products } from "../../product";
import ProductList from "../components/productList";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between m-2 md:mb-5 gap-2">
        <h1 className="text-2xl md:text-4xl">PRODUCTS LIST</h1>
        <ProductSearch />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductList key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
