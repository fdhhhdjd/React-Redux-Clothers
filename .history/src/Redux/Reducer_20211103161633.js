import * as types from "./ActionType";
const initialState = {
  cart: [],
  loading: false,
  error: null,
  currentItem: null,
};
const BasketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_API_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_API_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: payload,
      };
    case types.FETCH_API_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case types.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: payload,
      };
    default:
      return state;
  }
};
export default BasketReducer;
