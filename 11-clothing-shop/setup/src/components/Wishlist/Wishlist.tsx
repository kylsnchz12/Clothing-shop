import { useContext } from 'react';
import { ClothingShopContext } from '../../context/ShopContext';
import { Product } from '../../models/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductsWrapper, Title } from './Wishlist.styled';

export const Wishlist = () => {
    const { products, total } = useContext(ClothingShopContext);
    return (
        <>
        <Title>Your cart total wishlist is {total}.00$</Title>
        <ProductsWrapper>
            {products.map((product: Product, index) => (
            <ProductCard {...product} key={index} />
        ))}
        </ProductsWrapper>
    </>
    );
};
