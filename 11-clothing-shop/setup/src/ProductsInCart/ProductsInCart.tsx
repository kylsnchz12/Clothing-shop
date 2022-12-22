import {
    AddButton,
    CounterButtonWrap,
    CounterWrap,
    DecreaseButton,
    IncreaseButton,
    SubTitle,
    TextContainer,
    Title,
    WishListButton,
    Wrapper,
} from './ProductsInCart.styled';

import { Product } from '../models';
import { useContext, useEffect, useState } from 'react';
import { ClothingShopContext } from '../context';
import { BsFillGiftFill } from "react-icons/bs"

export const ProductsInCart = ({ name, imageUrl, price, quantity }: Product) => {
    const {products, addToCart, removeItem, updateItem} = useContext(ClothingShopContext);
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
    const product = {name, imageUrl, price, quantity};
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
    const item = {name, imageUrl, price, quantity};
    if(isInWishList){
        removeList(item)
        setIsInWishList(false)
    } else {
        addToList(item)
        setIsInWishList(true)
    }
    }

    const handleIncreaseClick = () => {
        const product = {name, imageUrl, price, quantity};
        updateItem(product, "Increment");
    }

    const handleDecreaseClick = () => {
        const product = {name, imageUrl, price, quantity};
        if(product.quantity - 1 === 0){
            removeItem(product);
        } else {
            updateItem(product, "Decrement");  
        }
    }
    
    return (
    <CounterWrap>
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
    <CounterButtonWrap>
        <IncreaseButton onClick={handleIncreaseClick}>+</IncreaseButton>
            <p>{quantity} in cart</p>
        <DecreaseButton onClick={handleDecreaseClick}>-</DecreaseButton>
    </CounterButtonWrap>
    </CounterWrap>
    );
};


