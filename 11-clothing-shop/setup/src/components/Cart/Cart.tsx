import { useContext, useState } from 'react';
import { ClothingShopContext } from '../../context/ShopContext';
import { Product } from '../../models/Product';
import { ProductsInCart } from '../../ProductsInCart';
import { ProductCard } from '../ProductCard/ProductCard';
import { CheckOutButton, ProductsWrapper, Title, ButtonWrap, CounterWrap, AddButton, RemoveButton, CounterButtonWrap } from './Cart.styled';

export const Cart = () => {
  const { products, total } = useContext(ClothingShopContext);

  return (
    <>
      <ButtonWrap>
        <Title>Your cart total is {total}.00$</Title>
          <CheckOutButton>Check out</CheckOutButton>
      </ButtonWrap>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <ProductsInCart {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
