import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';


const StyledSlider = styled(Slider)(({ theme }) => ({
  color: '#7B6342',
  height: 4,
  '& .MuiSlider-thumb': {
    width: 8,
    height: 8,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    '&::before': {
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.2)',
    },
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px rgb(0 0 0 / 6%)`,
    },
    '&.Mui-active': {
      width: 20,
      height: 20,
    },
  },
  '& .MuiSlider-rail': {
    opacity: 0.28,
  },
  ...(theme.palette.mode === 'dark' && {
    color: '#fff',
    '& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px rgb(255 255 255 / 16%)`,
    },
  }),
}));


interface MySliderProps {
    begginValue?: number;
    endValue?: number;
    begginString?: string;
    endString?: string;
    defaultValue?:number;
    multiplier?: number;
    step?:number;
    onValueChange?: (value: number) => void; 
  }
  
  const MySlider: React.FC<MySliderProps> = ({ begginValue=0,endValue=10,defaultValue=1,step=1,onValueChange}) => {
    
  
    const [val, setVal] = React.useState<number>(defaultValue);
    const handleChange = (_: Event, newValue: number | number[]) => {
      const value = Array.isArray(newValue) ? newValue[0] : newValue;
      setVal(value);
      onValueChange?.(value);
    };
  

    return (
      <Box sx={{ width: '100%' }}>
     <StyledSlider
          defaultValue={val} step={step} min={begginValue} max={endValue} onChange={handleChange}
      />
     </Box>
    );
  };
  
  export default MySlider;
