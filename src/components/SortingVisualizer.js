import {useState} from 'react';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts';
import Button  from '@mui/material/Button';
import Slider from '@mui/material/Slider';


function SortingVisualizer({length = 25}) {
    //utils
    function makeRandomArray() {
        const randomArray = Array.from({ length }, () => Math.floor(Math.random() * 100 + 100));
        return randomArray;
    }

    function mapValuesToObjectArray(){
        const arrayOfObjects = values.map((element) => ({ data: element }));
        return arrayOfObjects
    }
    //states
    const [values, setValues] = useState(() => makeRandomArray());
    const [colors, setColors] = useState(Array(length).fill('#fac420'));
    //click handlers
    const handleShuffleClick = () => {
        const shuffledArray = [...values]; // Clone the input array to avoid modifying the original.
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        setValues(shuffledArray);
    }

    const handleResetClick = () => {
        setValues(makeRandomArray());
    }

    const handleSliderChange = (event, newValue) => {
        const yellow = Array(newValue).fill('#fac420');
        const grey = Array(length - newValue).fill('#d3d3d3');
        setColors([...yellow, ...grey]);
    }

    const seriesData = values.map((element) => ({ data: element }));
    return (
        <Stack direction="row" spacing={2} alignItems='center' justifyContent='center' mr={2}>
            <BarChart
                series={values.map((s) => ({ data: [s] }))}
                // width={500}
                height={500}
                bottomAxis={null}
                leftAxis={null}
                colors={colors}
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
                />
            </Stack>
        </Stack> 
    );
}
export default SortingVisualizer;