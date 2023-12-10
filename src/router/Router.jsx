import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '../components/UI/Loader';

// importing components dynamically for optimization perspective
const Home = React.lazy(() => import("../pages/Home"));
const DetailPage = React.lazy(() => import("../pages/DetailPage"));

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={
        <Suspense fallback={<Loader />}>
          <Home />
        </Suspense>
      } />
      <Route path='/:id' element={
        <Suspense fallback={<Loader />}>
          <DetailPage />
        </Suspense>
      } />
    </Routes>
  )
}

export default Router