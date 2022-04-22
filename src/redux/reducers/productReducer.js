import { ActionTypes } from "../constant/actionType";

const initialState = {
  products: [
    {
      id: 1,
      title: "Pradeep",
      categrory: "developer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
