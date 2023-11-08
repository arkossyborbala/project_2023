import {useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts';
import Button  from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import BubbleSort from './algorithms/bubbleSort';
import MergeSort from './algorithms/mergeSort';
import QuickSort from './algorithms/quickSort';


function SortingVisualizer({length = 20}) {
    //utils
    function makeRandomArray() {
        const randomArray = Array.from({ length }, () => Math.floor(Math.random() * 100 + 10));
        return randomArray;
    }

    function RecalculateColors() {
        const yellow = Array(numYellow).fill('#fac420');
        const grey = Array(length - numYellow).fill('#d3d3d3');
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
    const [algorithm, setAlgorithm] = useState('bubbleSort'); //for dropdown
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
    
    const handleAlgorithmChange = (event) => {
        setAlgorithm(event.target.value);
    }

    const handleSortClick = () => {
        if(algorithm === 'bubbleSort'){
             BubbleSort(values, setValues, setNumYellow, setActiveIndex, 200)
        }
        else if(algorithm === 'mergeSort'){
            MergeSort(values, setValues, setNumYellow, setActiveIndex, 200)
        }
        else if(algorithm === 'quickSort'){
            QuickSort(values, setValues, setNumYellow, setActiveIndex, 200)
        }
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
                    sx={{marginRight: '10px'}}
                />
                <Slider
                    min={-1}
                    max={length-1}
                    step={1}
                    defaultValue={-1}
                    onChange={handleSecondSliderChange}
                />
                <FormControl fullWidth>
                    <InputLabel id="algorithm-select-label">Algorithm</InputLabel>
                    <Select
                      labelId="algorithm-select-label"
                      id="algorithm-select"
                      value={algorithm}
                      label="Algorithm"
                      onChange={handleAlgorithmChange}
                    >
                      <MenuItem value={'bubbleSort'}>Bubble sort</MenuItem>
                      <MenuItem value={'mergeSort'}>Merge sort</MenuItem>
                      <MenuItem value={'quickSort'}>Quick sort</MenuItem>
                      <MenuItem value={'radixSort'}>Radix sort</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" sx={'max-height:50px'} onClick={handleSortClick}>Sort</Button>
            </Stack>
        </Stack> 
    );
}
export default SortingVisualizer;