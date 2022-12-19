import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  WishListButton,
  Wrapper,
} from './ProductCard.styled';

import { Product } from '../../models';
import { Item } from '../../models/Items';
import { useContext, useEffect, useState } from 'react';
import { ClothingShopContext } from '../../context/ShopContext';
import { BsFillGiftFill } from "react-icons/bs"

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const {products, addToCart, removeItem} = useContext(ClothingShopContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishList, setIsInWishList] = useState(false);
  const {items, addToList, removeList} = useContext(ClothingShopContext);

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

  useEffect(() => {
    const itemInList = items.find((item: { name: string; }) => item.name === name);

    if (itemInList) {
      setIsInWishList(true);
    } else {
      setIsInWishList(false);
    }
  }, [items, name]);

  const handleWishListClick = () => {
    const item = {name, imageUrl, price};
    if(isInWishList){
      removeList(item)
      setIsInWishList(false)
    } else {
      addToList(item)
      setIsInWishList(true)
    }
  }
  
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart? "-" : "+"}</p>
      </AddButton>
      <WishListButton isInWish={isInWishList} onClick={handleWishListClick}>
        <BsFillGiftFill color="#ffffff" size="0.8em" />
      </WishListButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
