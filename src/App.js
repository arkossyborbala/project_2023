import React, { useState } from 'react';
import './App.css';
import ExplanatoryText from './ExplanatoryText.js';
import TopBar from './TopBar.js';



export default function App() {
  const [indexOfText, setIndexOfText] = useState(0);
  return (
    <>
      <TopBar setIndexOfText={setIndexOfText} />
      <ExplanatoryText index={indexOfText} />
    </>
  );
}
