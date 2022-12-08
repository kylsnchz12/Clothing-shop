import { createContext } from "react";
import { ShopState, initialState } from '../reducers';

export const ClothingShopContext = createContext<ShopState>(initialState);