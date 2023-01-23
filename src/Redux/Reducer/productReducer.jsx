import { ActionTypes } from "../Constants/ActionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Om",
      category: "developer",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return state
    default:
      return state
  }
};
