
import axios from "axios"
import { API_KEY, BASE_URL, getPrevSevenDaysDate } from "../../global/global"
import ACTION_TYPES from "../ActionTypes/ActionTypes";

const date = getPrevSevenDaysDate();

const GettingNewsListing = (topic, lang) => {
    return async (dispatch) => {
        const url = `${BASE_URL}?q=${topic ? topic : 'meta'}&from=${date}&sortBy=publishedAt&language=${lang ? lang : 'en'}&apiKey=${API_KEY}`
        // console.log('url:-' ,url)
        try {
            // for enabling loader
            dispatch({
                type:ACTION_TYPES.FETCH_NEWS
            })
            const response = await axios.get(url);
            const data = response.data.articles.slice(0,20);

            // setting custom Id due to no unique identifier oresent in api response
            let transformedData = data.map((newsObj,index)=>{
                return {
                    ...newsObj,
                    Id:index+1
                }
            })
            

            // for disabling loader and sending data to reducer 
            dispatch({
                type:ACTION_TYPES.FETCH_NEWS_SUCCESS,
                payload:transformedData
            })
        } catch (error) {
            dispatch({
                type:ACTION_TYPES.FETCH_NEWS_FAIL
            })
            console.log(error)
            alert(error.message)
        }

    }
}

export {
    GettingNewsListing
}