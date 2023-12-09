import React from 'react'
import { NewsCard, SelectBox } from '../MUI'
import SectionWrapper from '../components/UI/SectionWrapper'

const Home = () => {
  return (
    <SectionWrapper>
      <div className='topic-navigation-switcher flex justify-end'>
        <SelectBox options={['Topic', 'apple', 'meta', 'netflix', 'google', 'twitter', 'tesla']} />
      </div>
      <div className="news-card-listing flex gap-[1.5rem] flex-wrap">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </SectionWrapper>
  )
}

export default Home