import { useContext, useState } from 'react';
import { ClothingShopContext } from '../context';
import { Product } from '../models';
import { ProductsInCart } from '../ProductsInCart';
import { CheckOutButton, ProductsWrapper, Title, ButtonWrap, TotalWrap } from './Checkout.styled';
import { BsFillCartCheckFill } from "react-icons/bs"
import { CheckoutCard } from '../CheckoutCard';

export const Checkout = () => {
    const { products, total } = useContext(ClothingShopContext);

    return (
        <>
        <Title>Checkout</Title>
        <ProductsWrapper>
        {products.map((product: Product, index) => (
            <CheckoutCard {...product} key={index} />
        ))}
        </ProductsWrapper>
        <TotalWrap>
            <Title>Total: {total}.00$</Title>
        </TotalWrap>
    </>
    );
};
