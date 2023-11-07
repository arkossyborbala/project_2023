import React, { useState } from 'react';
import './App.css';
import ExplanatoryText from './components/ExplanatoryText.js';
import TopBar from './components/TopBar.js';
import SortingVisualizer from './components/SortingVisualizer.js';



export default function App() {
  const [indexOfText, setIndexOfText] = useState(0);
  return (
    <>
      <TopBar setIndexOfText={setIndexOfText} />
      <SortingVisualizer />
      <ExplanatoryText index={indexOfText} />
    </>
  );
}
