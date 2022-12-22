import styled from 'styled-components';

export const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

export const TotalWrap = styled.div`
  display: flex;
  justify-content: end;
`;
export const ProductsWrapper = styled.div`
  display: grid;
  justify-content: start;
  gap: 22px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckOutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  width: 100px;
  height: 30px;
  background-color: #60c95d;
  border: none;
  border-radius: 3px;
  color: white;
  padding: 5px;
  cursor: pointer;
  gap: 5px;

  :hover {
    background-color: #25be65;
    transition: 1s;
  }
  
  p {
    font-size: 12px;
    padding-top: 1px;
    color: white;
  }
`;