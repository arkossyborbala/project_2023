import {useState} from 'react';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts';
import Button  from '@mui/material/Button';


function SortingVisualizer({length = 25}) {
    const [values, setValues] = useState(() => makeRandomArray());
    const handleClick = (event) => {
        const shuffledArray = [...values]; // Clone the input array to avoid modifying the original.
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        setValues(shuffledArray);
    }

    function makeRandomArray() {
        const randomArray = Array.from({ length }, () => Math.floor(Math.random() * 100 + 100));
        return randomArray;
    }

    return (
        <Stack direction="row" spacing={2} alignItems='center' justifyContent='center' mr={2}>
            <BarChart
                series={[{ data: values }]}
                // width={500}
                height={500}
                bottomAxis={null}
                leftAxis={null}
                colors={Array(7).fill('#fac430')}
            />
            <Stack mr={2} spacing={2}>
                <Button variant="contained" sx={'max-height:50px'} onClick={handleClick}>Shuffle</Button>
                <Button variant="contained" sx={'max-height:50px'} onClick={() => setValues(makeRandomArray())}>Reset</Button>
            </Stack>
        </Stack> 
    );
}
export default SortingVisualizer;