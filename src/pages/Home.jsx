import React from 'react'
import { SelectBox } from '../MUI'

const Home = () => {
  return (
    <>
    <div className='topic-navigation-switcher flex justify-end'>
      <SelectBox options={['Topic','apple','meta','netflix','google','twitter','tesla']} />
    </div>
    </>
  )
}

export default Home