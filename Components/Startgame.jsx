import React from 'react';
import styled from 'styled-components';
import SelectNumber from './SelectNumber';
import Rolldice from './Rolldice';
import { useState } from 'react'
import Total from './Total';

const Maincontainer = styled.div`
  display: flex;
  padding-top: 50px;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 800px;
  }

  @media (max-width: 480px) {
    padding-top: 30px;
    gap: 10px;
  }

  @media (max-width: 300px) {
    padding-top: 20px;
    gap: 5px;
  }
`;

const Startgame = () => {
  const [Selectednumber, setSelectednumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [totalscore, settotalscore] = useState(0);
  const [error, setError] = useState("");

  const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rolldice = () => {
    const Randomnumb = generateRandom(1, 7);
    setCurrentDice((prev) => Randomnumb);

    if (!Selectednumber) {
      setError("You Have Not Selected Number");
      return;
    }
    setError("");

    if (Selectednumber == Randomnumb) {
      settotalscore(prev => prev + Randomnumb);
    } else {
      settotalscore(prev => prev - 2);
    }

    setSelectednumber(undefined);
  };

  return (
    <>
      <Maincontainer>
        <Total score={totalscore} />
        <SelectNumber
          Selectednumber={Selectednumber}
          setSelectednumber={setSelectednumber}
          error={error}
        />
      </Maincontainer>
      <Rolldice
        currentDice={currentDice}
        rolldice={rolldice}
        score={() => settotalscore(0)}
      />
    </>
  );
};

export default Startgame;