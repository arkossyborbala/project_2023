import Gallery from './Gallery.js';
import TopBar from './TopBar.js';
import {useState} from 'react';


export default function App() {
  const [numberOfPictures, setNumberOfPictures] = useState(2);
  return (
    <>
      <TopBar />
      <Gallery pictureCount = {numberOfPictures}/>
    </>
  );
}
