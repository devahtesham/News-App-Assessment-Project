import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { GettingNewsListing } from '../store/Actions/news';
import SectionWrapper from '../components/UI/SectionWrapper';
import { getFormattedDate, gettingTopicAndLangParams } from '../global/global';

const DetailPage = () => {
  const [newsDetail, setNewsDetail] = useState([])
  const dispatch = useDispatch()
  const { id } = useParams();
  const { news } = useSelector(state => state.NewsReducer);

  useEffect(() => {
    let paramsObj = gettingTopicAndLangParams()
    dispatch(GettingNewsListing(paramsObj.topic,paramsObj.lang))
  }, [])

  useEffect(() => {
    // filtering array
    gettingDetailNewsData(news)
  }, [news])

  const gettingDetailNewsData = (newsArray) => {
    console.log('news:- ',news);
    if (newsArray && newsArray.length > 0) {
      let filteredNews = newsArray.filter(news => news.Id == id );

      // getting formatted Date
      let formattedDate = getFormattedDate(filteredNews[0].publishedAt);
      let transformedObj = {
        ...filteredNews[0],
        publishedAt:formattedDate
      }
      setNewsDetail([transformedObj])
    }
  }



  return (
    <SectionWrapper>
      {
        newsDetail.length > 0 && (
          <div className="detail-page-container flex items-center gap-4 flex-wrap mt-10">
            <div className="detail-image basis-[40rem] ">
              <img src={newsDetail[0].urlToImage} alt={newsDetail[0].title} className='w-full rounded-3xl' />
            </div>
            <div className="detail-desc basis-[50%]">
              <h1 className='text-3xl font-semibold mb-4'>{newsDetail[0].title}</h1>
              <p className='text-[#00000099] mb-3'>{newsDetail[0].description}</p>
              <div className='flex items-center justify-between italic font-bold mb-3'>
                <span>Author:- {newsDetail[0].author}</span>
                <span>{newsDetail[0].publishedAt}</span>
              </div>
              <div>
                <p className='font-bold'>Source: </p>
                <span><a className='text-[#000000a7] font-semibold' href={newsDetail[0].url} target='_blank'>{newsDetail[0].url}</a></span>
              </div>
            </div>
          </div>
        )
      }
    </SectionWrapper>
  )
}

export default DetailPage