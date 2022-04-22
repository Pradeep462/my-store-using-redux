import { ActionTypes } from "../constant/actionType";

export const setProduct = product => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: product,
  };
};

export const selectProduct = product => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
