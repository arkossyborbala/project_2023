import {useState} from 'react';
import { ChartContainer, BarChart } from '@mui/x-charts';
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
    return (
        <>
        <BarChart
            series={[{ data: values }]}
            width={500}
            height={300}
            bottomAxis={null}
            leftAxis={null}
            colors={Array(7).fill('#fafa6e')}
        />
        <Button variant="contained">Contained</Button>
        </> 
    );
}
export default SortingVisualizer;