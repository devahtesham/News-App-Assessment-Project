import ACTION_TYPES from "../../ActionTypes/ActionTypes"

const INITIAL_STATE = {
    news: [],
    isLoading: ACTION_TYPES
}

const NewsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_NEWS:
            return {
                isLoading: true
            }
        case ACTION_TYPES.FETCH_NEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                news: [...action.payload]
            }
        case ACTION_TYPES.FETCH_NEWS_FAIL:
            return {
                isLoading: false
            }

        default:
            return {
                ...state
            }
    }

}

export {
    NewsReducer
}