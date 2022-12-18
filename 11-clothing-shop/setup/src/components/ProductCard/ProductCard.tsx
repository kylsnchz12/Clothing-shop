import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  WishListButton,
  Wrapper,
} from './ProductCard.styled';

import { Product } from '../../models';
import { useContext, useEffect, useState } from 'react';
import { ClothingShopContext } from '../../context/ShopContext';
import { BsFillGiftFill } from "react-icons/bs"

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const {products, addToCart, removeItem} = useContext(ClothingShopContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishList, setIsInWishList] = useState(false)

  useEffect(() => {
    const itemInCart = products.find((product: { name: string; }) => product.name === name);

    if (itemInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleClick = () => {
    const product = {name, imageUrl, price};
    if(isInCart){
      removeItem(product);
      setIsInCart(false);
    } else{
      addToCart(product);
      setIsInCart(true);
    }
  }

  const handleWishListClick = () => {
    if(isInWishList){
      setIsInWishList(false)
    } else {
      setIsInWishList(true)
    }
  }
  
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart? "-" : "+"}</p>
      </AddButton>
      <WishListButton isInCart={isInWishList} onClick={handleWishListClick}>
        <BsFillGiftFill color="#ffffff" size="0.8em" />
      </WishListButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
