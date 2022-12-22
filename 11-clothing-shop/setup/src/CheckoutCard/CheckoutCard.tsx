import {
    AddButton,
    ItemWrap,
    SubTitle,
    TextContainer,
    TextWrap,
    Title,
    WishListButton,
    Wrapper,
} from './CheckoutCard.styled';

import { Product } from '../models';
import { useContext, useEffect, useState } from 'react';
import { ClothingShopContext } from '../context';
import { BsFillGiftFill } from "react-icons/bs"

export const CheckoutCard = ({ name, imageUrl, price, quantity }: Product) => {
    const {products, addToCart, removeItem} = useContext(ClothingShopContext);
    const [isInCart, setIsInCart] = useState(false);
    const [isInWishList, setIsInWishList] = useState(false);
    const {items, addToList, removeList} = useContext(ClothingShopContext);

    return (
        <ItemWrap>
            <Wrapper background={imageUrl}>
            </Wrapper>
            <TextWrap>
                <h4>{name}</h4>
                <p>{price}.00$</p>
                <p>{quantity}x</p>
                <h5>Subtotal: {price * quantity}.00$</h5>
            </TextWrap>
        </ItemWrap>
    );
};
