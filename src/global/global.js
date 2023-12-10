// base url
const BASE_URL = 'https://newsapi.org/v2/everything';

// API Key
const API_KEY = 'f3d93c993f9c4db087b13b00b085deb4'

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
    return {
        topic,
        lang
    }
}

// handling RTL for Arabic
const handleRtlForArabic = () => {
    document.querySelector('body').classList.add('rtl')
}


let dummyText = 'Lorem ipsum, dolor sit amet dolore dolor ut, veritatis id repellendus. Quaerat, consequuntur!'
let dummyTitle = 'You are seeing a Dummy Title due to API null results'

export { BASE_URL, getPrevSevenDaysDate, API_KEY, getFormattedDate, dummyText, dummyTitle, gettingTopicAndLangParams,handleRtlForArabic }