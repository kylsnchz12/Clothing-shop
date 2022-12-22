import { useContext } from 'react';
import { ClothingShopContext } from '../../context/ShopContext';
import { Item } from '../../models/Items';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductsWrapper, Title } from './Wishlist.styled';

export const Wishlist = () => {
    const { items } = useContext(ClothingShopContext);
    return (
        <>
        <Title>Your wishlist</Title>
        <ProductsWrapper>
            {items.map((item: Item, index) => (
            <ProductCard quantity={0} {...item} key={index} />
        ))}
        </ProductsWrapper>
    </>
    );
};
