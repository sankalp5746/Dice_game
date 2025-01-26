import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Rules from './Rules';

const Contains = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    img {
      width: 100%;
      max-width: 200px;
      height: auto;

      @media (max-width: 480px) {
        max-width: 150px;
      }

      @media (max-width: 300px) {
        max-width: 120px;
      }
    }
  }

  p {
    font-size: 1.5rem;

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }

    @media (max-width: 300px) {
      font-size: 1rem;
    }
  }

  button {
    background-color: black;
    width: 100%;
    max-width: 220px;
    color: white;
    padding: 14px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
      background-color: white;
      color: black;
      transition: 0.4s ease-in;
    }

    @media (max-width: 480px) {
      padding: 10px;
      font-size: 0.9rem;
    }

    @media (max-width: 300px) {
      padding: 8px;
      font-size: 0.8rem;
    }
  }
`;

const Rolldice = ({ currentDice, rolldice, score }) => {
  const [rules, setrules] = useState(false);

  return (
    <>
      <Contains>
        <div className="dice" onClick={rolldice}>
          <img src={`/images/dices/dice_${currentDice}.png`} alt='dice' />
        </div>
        <p>Click to Roll Dice</p>
        <button onClick={score}>Reset</button>
        <button onClick={() => setrules((prev) => !prev)}>{rules ? "Hide" : "Show"} Rules</button>
        {rules && <Rules />}
      </Contains>
    </>
  )
}

export default Rolldice