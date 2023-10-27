import TopBar from './TopBar.js';
import ExplanatoryText from './ExplanatoryText.js';
import {useState} from 'react';
import {Layout} from './tracers/Layout.ts'
import {VerticalLayout} from './tracers/VerticalLayout.ts'
import {LogTracer} from './tracers/LogTracer.ts'

export default function App() {
  const [indexOfText, setIndexOfText] = useState(0);

  const logger = new LogTracer('Log');
  Layout.setRoot(new VerticalLayout([logger]));

  return (
    <>
      <TopBar setIndexOfText = {setIndexOfText}/>
      <ExplanatoryText index = {indexOfText}/>
    </>
  );
}
