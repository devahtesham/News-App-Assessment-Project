import React, { useEffect, useState } from 'react'
import { NewsCard, SelectBox } from '../MUI'
import SectionWrapper from '../components/UI/SectionWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { GettingNewsListing } from '../store/Actions/news'
import Loader from '../components/UI/Loader'
import { Link } from 'react-router-dom'
import { gettingTopicAndLangParams } from '../global/global'

const Home = () => {
  const dispatch = useDispatch();
  let [topic, setTopic] = useState('');
  let [lang, setLang] = useState('');
  let { isLoading, news } = useSelector(state => state.NewsReducer);

  useEffect(() => {
    // getting topic and language parameters form LS

    let paramsObj = gettingTopicAndLangParams()
    dispatch(GettingNewsListing(paramsObj.topic, paramsObj.lang));

  }, [topic, lang])

  // on switching topic
  const topicChangeHandler = (e) => {
    setTopic(e.target.value);

    // setting in local storage for maintaining session
    localStorage.setItem('topic', e.target.value)
  }

  // on switching language
  const langChangeHandler = (e) => {
    setLang(e.target.value)

    // setting in local storage for maintaining session
    localStorage.setItem('lang', e.target.value)
  }


  return (
    <SectionWrapper>
      <div className='topic-navigation-switcher flex justify-between'>
        <SelectBox options={['Language', 'en', 'ar']}
          onChange={langChangeHandler}
          value={lang}
        />
        <SelectBox options={['Topic', 'meta', 'apple', 'netflix', 'google', 'twitter', 'tesla']}
          onChange={topicChangeHandler}
          value={topic}
        />
      </div>
      <div className="news-card-listing flex gap-[1.5rem] flex-wrap mt-7 relative">
        {
          isLoading ? <Loader /> : (
            <>
              {
                news.length < 1 ? <h1 className='text-center text-3xl font-semibold w-full'>No News Found !</h1> : (
                  news.map((newsObj, id) => (
                    <Link target='_blank' key={id} to={`/${newsObj.Id}`} className='news-card overflow-hidden border-2 border-[#9e9e9e42] rounded-3xl flex-grow-0 flex-shrink-0 basis-[295px] mb-4 h-[26rem] bg-none hover:shadow-2xl duration-300'>
                      <NewsCard newsObj={newsObj} />
                    </Link>
                  ))

                )
              }

            </>
          )
        }
      </div>
    </SectionWrapper>
  )
}

export default Home