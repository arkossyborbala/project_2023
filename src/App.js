import TopBar from './TopBar.js';
import ExplanatoryText from './ExplanatoryText.js';
import {useState} from 'react';


export default function App() {
  const [indexOfText, setIndexOfText] = useState(0);
  return (
    <>
      <TopBar setIndexOfText = {setIndexOfText}/>
      <ExplanatoryText index = {indexOfText}/>
    </>
  );
}
