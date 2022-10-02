import { PRODUCT_TYPES } from "../actions/product.action";
import { DeleteData } from "../actions/globalTypes.action";

const initialState = {
  loading: false,
  product: {
    data: [],
  },
  message: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_TYPES.POST_PRODUCT:
      state.product.data.push(action.payload.response.data);
      return {
        ...state,
        product: {
          ...state.product,
        },
      };
    case PRODUCT_TYPES.GET_PRODUCT:
      return {
        ...state,
        product: action.payload.response,
      };
    case PRODUCT_TYPES.DELETE_PRODUCT:
      return {
        ...state,
        product: {
          ...state.product,
          data: DeleteData(state.product.data, action.payload.uuid_product),
        },
      };
    case PRODUCT_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default productReducer;
