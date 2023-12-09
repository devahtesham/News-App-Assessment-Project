import * as React from 'react';
import Switch from '@mui/material/Switch';
import {useState} from 'react'
const ThemeToggler = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <label htmlFor="">{checked ? 'Dark' :'Light'}</label>
        </>
        
    );
}
export default ThemeToggler