import * as React from 'react';
import Switch from '@mui/material/Switch';
import {useState,useEffect} from 'react'
const ThemeToggler = () => {
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
       if(localStorage.getItem('isDarkTheme') === 'true'){
        setDarkParam();
        setChecked(true)
       }
    },[])

    const handleChange = (event) => {
        setChecked(event.target.checked);
        localStorage.setItem('isDarkTheme',event.target.checked)
        setDarkParam()
    };

    const setDarkParam = ()=>{
        document.querySelector('body').classList.toggle('dark');
    }
    return (
        <>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                sx={{borderRadius:'15px',boxShadow:'0 0 10px 0 #00000038',marginRight:'8px'}}
            />
            <label htmlFor="">{checked ? 'Dark' :'Light'}</label>
        </>
        
    );
}
export default ThemeToggler