import { ActionTypes } from "../Constants/ActionTypes";
export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const selectedProducts = (product) => {
  return {
    type: "SELECTED_PRODUCT",
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: "REMOVE_SELECTED_PRODUCT",
  };
};