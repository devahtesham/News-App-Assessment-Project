import React from 'react'
import { SelectBox, ThemeToggler } from '../../MUI'

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between p-3'>
        <div className="logo">
          <h1 className='text-4xl font-extrabold'>NEWS APP</h1>
        </div>
        <div className="language-switcher-navigation">
          <SelectBox options={['Language','English','Arabic']} />
        </div>
        <div className="theme-switcher-navigation">
          <ThemeToggler />
        </div>
      </header>
    </>
  )
}

export default Header