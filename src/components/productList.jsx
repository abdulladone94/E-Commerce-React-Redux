import { Link } from "react-router-dom";
import cartIcon from "../assets/images/iconCart.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, name, price, description, image, slug } = props.data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, itemQuentity: 1 }));
  };

  return (
    <div className="bg-white rounded-xl px-5 py-3 shadow-sm">
      <Link to={slug}>
        <img
          src={image}
          alt="proImage"
          className="w-full h-60 object-contain"
        />

        <h3 className="h-20 text-2xl py-1 text-center font-medium">{name}</h3>
        <p className="h-28 text-sm py-3 text-justify text-clip overflow-hidden">
          {description}
        </p>
      </Link>
      <div className="flex items-center justify-between mt-2">
        <p className="font-semibold text-xl">
          $ <span className="text-2xl font-medium">{price}</span>
        </p>
        <button
          className="flex items-center gap-5 bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400"
          onClick={handleAddToCart}
        >
          <img src={cartIcon} alt="cartIcon" className="w-5" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
