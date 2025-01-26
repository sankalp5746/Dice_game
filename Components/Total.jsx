import React from 'react'
import styled from 'styled-components'

const Totals = styled.div`
  padding: 10px;
  margin-bottom: 20px;
  max-width: 220px;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }

    @media (max-width: 300px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin: 0;

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }

    @media (max-width: 300px) {
      font-size: 1rem;
    }
  }
`;

const Total = ({ score }) => {
  return (
    <>
      <Totals>
        <h1>{score}</h1>
        <p>Total Score</p>
      </Totals>
    </>
  )
}

export default Total