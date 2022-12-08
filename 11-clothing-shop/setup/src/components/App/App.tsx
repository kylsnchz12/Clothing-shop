import { Link, Route, Routes } from 'react-router-dom';
import { LinksWrapper, TitleWrapper, Wrapper } from './App.styled';

import { Cart } from '../Cart';
import { Products } from '../Products';
import { useReducer } from 'react';
import { shopReducer } from '../../reducers/reducer';
import { initialState } from '../../reducers/state';
import { Product } from '../../models/Product';
import { add, remove, update } from '../../reducers/actions';
import { ClothingShopContext } from '../../context';

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  
  const addToCart = (product: Product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);

    dispatch(add(updatedCart));
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
    products.forEach((product: { price: number; }) => (total = total + product.price));

    dispatch(update(total));
  };
  
  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeItem
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
      </LinksWrapper>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Wrapper>
    </ClothingShopContext.Provider>
  );
};
