import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;

export const CheckOutButton = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 100px;
  height: 30px;
  background-color: #60c95d;
  border: none;
  border-radius: 3px;
  color: white;
  padding: 5px;
  cursor: pointer;

  :hover {
    background-color: #25be65;
    transition: 1s;
  }
  
  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
`;
