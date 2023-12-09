import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home,DetailPage } from '../pages'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:id' element={<DetailPage />} />
    </Routes>
  )
}

export default Router