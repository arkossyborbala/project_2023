import {useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts';
import Button  from '@mui/material/Button';
import Slider from '@mui/material/Slider';


function SortingVisualizer({length = 10}) {
    //utils
    function makeRandomArray() {
        const randomArray = Array.from({ length }, () => Math.floor(Math.random() * 100 + 10));
        return randomArray;
    }

    function RecalculateColors() {
        const yellow = Array(numYellow).fill('#fac420');
        const grey = Array(length - numYellow).fill('#d3d3d3');
        console.log(numYellow, activeIndex);
        let newColors = [...yellow, ...grey];
        if(activeIndex !== -1){
            newColors[activeIndex] = '#E0039C';
        }
        setColors(newColors);
    }
    //states
    const [values, setValues] = useState(() => makeRandomArray());
    const [colors, setColors] = useState(Array(length).fill('#fac420'));
    const [numYellow, setNumYellow] = useState(length); //for slider [0, length]
    const [activeIndex, setActiveIndex] = useState(-1);
    //hooks
    useEffect(() => RecalculateColors(), [numYellow]);
    useEffect(() => RecalculateColors(), [activeIndex]);
    //click handlers
    const handleShuffleClick = () => {
        const shuffledArray = [...values];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        setValues(shuffledArray);
    }

    const handleResetClick = () => {
        setValues(makeRandomArray());
    }

    const handleSliderChange = (_, newValue) => {
        setNumYellow(newValue);
    }

    const handleSecondSliderChange = (_, newValue) => {
        setActiveIndex(newValue);
    }   

    return (
        <Stack direction="row" spacing={2} alignItems='center' justifyContent='center' mr={2}>
            <BarChart
                series={values.map((s) => ({ data: [s] }))}
                height={500}
                bottomAxis={null}
                leftAxis={null}
                colors={colors}
                axisHighlight={{x: 'none', y: 'none'}}
            />
            <Stack mr={2} spacing={2}>
                <Button variant="contained" sx={'max-height:50px'} onClick={handleShuffleClick}>Shuffle</Button>
                <Button variant="contained" sx={'max-height:50px'} onClick={handleResetClick}>Reset</Button>
                <Slider
                    min={0}
                    max={length}
                    step={1}
                    defaultValue={length}
                    onChange={handleSliderChange}
                    valueLabelDisplay="on"
                />
                <Slider
                    min={-1}
                    max={length-1}
                    step={1}
                    defaultValue={-1}
                    onChange={handleSecondSliderChange}
                    valueLabelDisplay="on"
                />
            </Stack>
        </Stack> 
    );
}
export default SortingVisualizer;