const initialState = {
  searchTerm: "",
  results: [],
  loading: false
}


export default function mainPage(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_TERM_CHANGED": {
      return {
        ...state,
        searchTerm: action.searchTerm
      }
    }
    case "EMAIL_PENDING": {
      return {
        ...state,
        results: [],
        loading: true
      }
    }
    case "EMAIL_FULFILLED": {
      return {
        ...state,
        results: action.payload,
        loading: false
      }
    }
    default:
      return state
  }
}