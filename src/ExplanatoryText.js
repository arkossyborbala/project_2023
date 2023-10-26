import { Box } from '@mui/system';

export default function ExplanatoryText({index}){
  const texts = ["This is merge sort", "This is quick sort", "This is bubble sort"]
    return(
      <Box component="span" sx={{ display: 'block'}}>{texts[index]}</Box>
    )
  }