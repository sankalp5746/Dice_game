import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 2px solid black;
  display: grid;
  color: black;
  width: 72px;
  height: 72px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 300px) {
    width: 50px;
    height: 50px;
    font-size: 0.9rem;
  }
`;

const NumberContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  width: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }

  p {
    font-weight: 700;
    font-size: 1.5rem;

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }

    @media (max-width: 320px) {
      font-size: 0.8rem;
      gap:5px;
    }
  }

  p1 {
    font-weight: 500;
    font-size: 1.25rem;
    color: red;

    @media (max-width: 480px) {
      font-size: 1rem;
    }

    @media (max-width: 300px) {
      font-size: 0.9rem;
    }
  }
`;

const SelectNumber = ({ Selectednumber, setSelectednumber, error }) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <NumberContainer>
        <p1>{error}</p1>
        <div style={{ display: "flex", gap: "10px" }}>
          {arrayNumber.map((number) => (
            <Box
              isSelected={number == Selectednumber}
              key={number}
              onClick={() => setSelectednumber(number)}
            >
              {number}
            </Box>
          ))}
        </div>
        <p>SELECT NUMBER</p>
      </NumberContainer>
    </>
  );
};

export default SelectNumber;