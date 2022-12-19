import { ShopAction, ShopActionType } from "./actions";
import { ShopState } from "./state";

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.ADD:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.REMOVE:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.UPDATE:
      return {
        ...state,
        total: action.payload,
      };
    
    case ShopActionType.WISHADD:
      return {
        ...state,
        items: action.payload
      };

    case ShopActionType.WISHREMOVE:
        return {
          ...state,
          items: action.payload
        };

    default:
      return state;
  }
};