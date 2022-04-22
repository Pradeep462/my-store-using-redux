import axios from "axios";
import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "../redux/actions/producsActions";

const ProductListing = () => {
  const products = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch(err => {
        console.log("Err", err);
      });
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className="ui grid container" style={{ marginTop: "40px" }}>
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
