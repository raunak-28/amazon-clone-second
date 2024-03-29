export const initialState = {
  cart: [],
  user: null,
  product: [],
  addresses: [],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "ADD_ADDRESS":
      return {
        ...state,
        addresses: [...state.addresses, action.item],
      };

    case "INITIALIZE_CART":
      const cartItems = action.item ? action.item : [];
      return {
        ...state,
        cart: cartItems,
      };

    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_PRODUCT_LIST":
      return {
        ...state,
        product: action.item,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex((item) => item.id === action.id);
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn("cant remove product");
      }
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

export default reducer;
