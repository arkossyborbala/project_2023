import {useState} from 'react';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts';
import Button  from '@mui/material/Button';

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

function SortingVisualizer() {
    const [values, setValues] = useState([4000, 3000, 2000, 2780, 1890, 2390, 3490]);
    const handleClick = (event) => {
        const shuffledArray = [...values]; // Clone the input array to avoid modifying the original.
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        setValues(shuffledArray);
    }
    return (
        <Stack direction="row" spacing={2} alignItems='center' justifyContent='center' mr={2}>
            <BarChart
                series={[{ data: values }]}
                width={500}
                height={300}
                bottomAxis={null}
                leftAxis={null}
                colors={Array(7).fill('#fac430')}
            />
            <Button variant="contained" sx={'max-height:50px'} onClick={handleClick}>Do stuff</Button>
        </Stack> 
    );
}
export default SortingVisualizer;