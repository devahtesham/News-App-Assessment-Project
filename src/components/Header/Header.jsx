import React from 'react'
import { SelectBox, ThemeToggler } from '../../MUI'

const Header = () => {
  return (
    <>
      <header className='header flex items-center justify-between py-4 px-3 mb-8 sticky top-0 left-0 bg-white z-10 shadow-md rtl-switch'>
        <div className="logo">
          <div className='text-4xl font-extrabold text-[#f00]'>NEWS APP</div>
        </div>
        <div className="theme-switcher-navigation">
          <ThemeToggler />
        </div>
      </header>
    </>
  )
}

export default Header