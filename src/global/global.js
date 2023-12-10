// base url
const BASE_URL = 'https://newsapi.org/v2/everything';

// API Key
const API_KEY = '51a82f00456a407f8521f2977df5fa3d'

// return past 7 days date
const getPrevSevenDaysDate = () => {
    const currentDate = new Date();
    const sevenDaysAgo = new Date(currentDate - 7 * 24 * 60 * 60 * 1000);
    const isoDateSevenDaysAgo = sevenDaysAgo.toISOString().split('T')[0];
    return isoDateSevenDaysAgo
}

// date formatting
const getFormattedDate = (unFormattedDate) => {
    const formattedDate = unFormattedDate.split('T')[0];
    return formattedDate
}

// getting lang and topic
const gettingTopicAndLangParams = () => {
    let topic = localStorage.getItem('topic')
    let lang = localStorage.getItem('lang');
    return{
        topic,
        lang
    }
}

let dummyText = 'Lorem ipsum, dolor sit amet dolore dolor ut, veritatis id repellendus. Quaerat, consequuntur!'
let dummyTitle = 'You are seeing a Dummy Title due to API null results'

export { BASE_URL, getPrevSevenDaysDate, API_KEY, getFormattedDate, dummyText, dummyTitle,gettingTopicAndLangParams }