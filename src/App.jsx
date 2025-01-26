import React from "react";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Startgame from "../Components/Startgame";

const Container = styled.div`
  margin: 0 auto;
  top: 180px;
  max-width: 1182px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    width: 100%;
    max-width: 649px;
    height: auto;
  }

  h1 {
    font-size: 4rem;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 6rem;
      text-align: left;
    }

    @media (max-width: 480px) {
      font-size: 3rem;
    }

    @media (max-width: 300px) {
      font-size: 2.5rem;
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

    @media (max-width: 300px) {
      padding: 10px;
      font-size: 0.9rem;
    }
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src="/images/dices 1.png" alt="dices" />
      <div>
        <h1>DICE GAME</h1>
        <button onClick={() => navigate('/Startgame')}>PLAY NOW</button>
      </div>
    </Container>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Startgame" element={<Startgame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;