import {
    ItemWrap,
    TextWrap,
    Wrapper,
} from './CheckoutCard.styled';

import { Product } from '../models';

export const CheckoutCard = ({ name, imageUrl, price, quantity }: Product) => {
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
