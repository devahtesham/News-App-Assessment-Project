import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectBox = (props) => {
    const [label,...options] = props.options;

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    MenuProps={{
                        disableScrollLock: true
                    }}
                    labelId={`demo-simple-select-${label}`}
                    id={`demo-simple-select-${label}`}
                    value={props.value}
                    label={label}
                    onChange={props.onChange}
                    sx={{}}
                >
                    {
                        options.map((option,index) => <MenuItem key={index} value={option}>{option}</MenuItem> )
                    }
                    
                    {/* <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
        </Box>
    );
}
export default SelectBox