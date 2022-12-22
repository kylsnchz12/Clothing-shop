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

export const CounterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CounterButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
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

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background: #d7e7ec;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  :hover {
    background: #60c95d;
    transition: 1s;
  }

  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
`;

export const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background: #d7e7ec;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  :hover {
    background: #E55336;
    transition: 1s;
  }

  p {
    font-size: 20px;
    margin: 0;
    color: white;
  }
`;

