import { useContext, useState } from 'react';
import { ClothingShopContext } from '../../context/ShopContext';
import { Product } from '../../models/Product';
import { ProductsInCart } from '../../ProductsInCart';
import { CheckOutButton, ProductsWrapper, Title, ButtonWrap } from './Cart.styled';
import { BsFillCartCheckFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { products, total } = useContext(ClothingShopContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  }

  return (
    <>
      <ButtonWrap>
        <Title>Your cart total is {total}.00$</Title>
          <CheckOutButton onClick={handleClick}>
          <BsFillCartCheckFill color="#ffffff" size="1.2em" />
          <p>Check out</p>
          </CheckOutButton>
      </ButtonWrap>
      <ProductsWrapper>
        {products.map((product: Product, index) => (
          <ProductsInCart {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
