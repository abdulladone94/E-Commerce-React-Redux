import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { products } from "../../product";

const DetailProduct = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [itemQuentity, setItemQuentity] = useState(0);
  console.log(productDetail);
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const findProduct = products.filter((product) => product.slug === slug);
    if (findProduct.length > 0) {
      setProductDetail(findProduct[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handlePlusClick = () => {
    setItemQuentity(itemQuentity + 1);
  };

  const handleMinusClick = () => {
    setItemQuentity(itemQuentity - 1 < 1 ? 1 : itemQuentity - 1);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: productDetail.id,
        itemQuentity: itemQuentity,
      })
    );
  };

  return (
    <div>
      <h1 className="text-2xl md:text-4xl m-4">PRODUCT DETAIL</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div>
          <img src={productDetail.image} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold uppercase">
            {productDetail.name}
          </h1>
          <p className="text-3xl font-bold">${productDetail.price}</p>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center">
              <button
                className="bg-gray-100 h-full w-10 rounded-xl flex justify-center items-center text-xl font-bold"
                onClick={handlePlusClick}
              >
                +
              </button>
              <span className="h-full w-10 rounded-xl flex justify-center items-center text-xl font-bold">
                {itemQuentity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 rounded-xl flex justify-center items-center text-xl font-bold"
                onClick={handleMinusClick}
              >
                -
              </button>
            </div>
            <button
              className="bg-black text-white rounded-xl py-3 px-7 shadow-2xl"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <p>{productDetail.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
