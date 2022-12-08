import { Product } from "../models";

export enum ShopActionType {
    ADD = 'ADD_TO_CART',
    REMOVE = 'REMOVE_FROM_CART',
    UPDATE = 'UPDATE_PRICE',
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