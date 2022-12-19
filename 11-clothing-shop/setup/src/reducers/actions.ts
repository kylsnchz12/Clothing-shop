import { Product } from "../models";
import { Item } from "../models/Items";

export enum ShopActionType {
    ADD = 'ADD_TO_CART',
    REMOVE = 'REMOVE_FROM_CART',
    UPDATE = 'UPDATE_PRICE',
    WISHADD = 'ADD_TO_WISHLIST',
    WISHREMOVE = 'REMOVE_FROM_WISHLIST',
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
  export const add = (product: Product): ShopAction => ({
    type: ShopActionType.ADD,
    payload: product,
  });
  
  export const remove = (product: Product): ShopAction => ({
    type: ShopActionType.REMOVE,
    payload: product,
  });

  export const update = (total: number): ShopAction => ({
    type: ShopActionType.UPDATE,
    payload: total,
  });

  export const addWish = (item: Item): ShopAction => ({
    type: ShopActionType.WISHADD,
    payload: item,
  });

  export const removeWish = (item: Item): ShopAction => ({
    type: ShopActionType.WISHREMOVE,
    payload: item,
  });