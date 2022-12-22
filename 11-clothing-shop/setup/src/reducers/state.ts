import { Product } from "../models"
import { Item } from "../models/Items"

export type ShopState = {
    products: Product[],
    items: Item[],
    total: number,
    addToCart: any,
    removeItem: any,
    addToList: any,
    removeList: any,
    updateItem: any
}

export const initialState = {
    products: [],
    items: [],
    total: 0,
    addToCart: null,
    removeItem: null,
    addToList: null,
    removeList: null,
    updateItem: null
}