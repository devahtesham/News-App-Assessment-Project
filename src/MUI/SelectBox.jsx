import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from "react"
const SelectBox = (props) => {
    const [label,...options] = props.options;

    const [optionValue, setOptionValue] = useState('');

    const handleChange = (event) => {
        setOptionValue(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={optionValue}
                    label={label}
                    onChange={handleChange}
                >
                    {
                        options.map((option,index) => <MenuItem key={index} value={index}>{option}</MenuItem> )
                    }
                    
                    {/* <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
            </FormControl>
        </Box>
    );
}
export default SelectBox