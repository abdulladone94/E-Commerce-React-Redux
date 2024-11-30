import { products } from "../../product";
import ProductList from "../components/productList";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-4xl m-4">PRODUCTS LIST</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductList key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
