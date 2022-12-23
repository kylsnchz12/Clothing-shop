import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';

import { Cart } from '../Cart';
import { Products } from '../Products';
import { useReducer } from 'react';
import { shopReducer } from '../../reducers/reducer';
import { initialState } from '../../reducers/state';
import { Product } from '../../models/Product';
import { add, addWish, remove, removeWish, update } from '../../reducers/actions';
import { ClothingShopContext } from '../../context';
import { Wishlist } from '../Wishlist';
import { Item } from '../../models/Items';
import { Checkout } from '../../Checkout';

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  
  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
      updatePrice(updatedCart);
      dispatch(add(updatedCart));
  };

  const addToList = (item: Item) => {
    const updatedCart = state.items.concat(item);
    dispatch(addWish(updatedCart));
  };

  const removeList = (item: Item) => {
    const updatedCart = state.items.filter(
      (currentItem: Item) => currentItem.name !== item.name
    );

    dispatch(removeWish(updatedCart));
  };
  
  const removeItem = (product: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);

    dispatch(remove(updatedCart));
  };
  
  const updatePrice = (products: [] = []) => {
    let total = 0;
    products.forEach((product: { price: number; quantity: number}) => {
      if(product.quantity > 1){
        total = total + (product.price * product.quantity)
      } else {
        total = total + product.price
      }
    });

    dispatch(update(total));
  };

  const updateItem = (product: Product, status: String) => {
    const updatedCart = state.products 

    if(status === "Increment"){
      updatedCart.map((item: Product) => {
        if(item.name === product.name){
          item.quantity = item.quantity+1;
        }
      })  
    } else {
      updatedCart.map((item: Product) => {
        if(item.name === product.name){
          item.quantity = item.quantity-1;
        }
      })  
    }

    updatePrice(updatedCart);
  }
  

  const value = {
    total: state.total,
    products: state.products,
    items: state.items,
    addToCart: addToCart,
    removeItem: removeItem,
    addToList: addToList,
    removeList: removeList,
    updateItem: updateItem,
  }

  return (
    <ClothingShopContext.Provider value={value}>
    <Wrapper>
      <TitleWrapper>
        <h1>Clothing Shop Starter Project</h1>
      </TitleWrapper>
      <LinksWrapper>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/wishlist'>Wishlist</Link>
      </LinksWrapper>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Wrapper>
    </ClothingShopContext.Provider>
  );
};
